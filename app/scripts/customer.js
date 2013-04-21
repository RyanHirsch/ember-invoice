//Customers
App.CustomersRoute = Ember.Route.extend({
  model: function() {
    return App.Customer.find();
  }
});

App.CustomersForm = Ember.Mixin.create({
  renderTemplate: function() {
    return this.render('customers/form', function() {
      return {
        outlet: 'modal'
      };
    });
  },
  events: {
    cancel: function(customer) {
      customer.transaction.rollback();
      return this.transitionTo('customers');
    },
    submit: function(customer) {
      customer.get('store').commit();
      if (customer.didCreate) {
        return this.transitionTo('customers');
      }
    }
  }
});

App.CustomersNewRoute = Ember.Route.extend(App.CustomersForm, {
  model: function() {
    return App.Customer.createRecord();
  }
});

App.CustomersFormView = Ember.View.extend({
  tagName: 'form',
  classNames: 'modal fade in form-custom-field-modal'.w(),
  didInsertElement: function() {
    return this.$().modal('show');
  },
  willDestroyElement: function() {
    return this.$().modal('hide');
  }
});

// Customers/Controllers
App.CustomersController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true
});


//Customer
// App.CustomerController = Ember.ObjectController.extend({
//   isEditing: false,

//   startEditing: function() {
//     this.set('isEditing', true);
//   },

//   doneEditing: function() {
//     this.set('isEditing', false);
//   },
// });

App.CustomerEditRoute = Ember.Route.extend(App.CustomersForm, {
  model: function() {
    return this.modelFor('customer');
  }
});