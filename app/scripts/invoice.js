App.InvoicesRoute = Ember.Route.extend({
  model: function() {
    return App.Invoice.find();
  }
});

App.InvoicesController = Ember.ArrayController.extend({
  sortProperties: ['startDate'],
  sortAscending: false
});