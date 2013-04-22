App.InvoicesRoute = Ember.Route.extend({
  model: function() {
    return App.Invoice.find();
  }
});

App.InvoicesNewRoute = Ember.Route.extend({
  model: function() {
    return App.Invoice.createRecord();
  }
});

App.InvoicesController = Ember.ArrayController.extend({
  sortProperties: ['startDate'],
  sortAscending: false
});

App.InvoicesNewController = Ember.ObjectController.extend({
  cancel: function(invoice) {
    invoice.transaction.rollback();
    this.transitionToRoute('invoices');
  },
  submit: function(invoice) {
    invoice.get('store').commit();
    if (invoice.didCreate) {
      return this.transitionToRoute('invoice', invoice);
    }
  }
});