var App = Ember.Application.create();
App.Router.map(function() {
  this.resource('customers', function() {
    this.resource('customer', { path: ':customer_id' }, function() {
      this.route('edit');
    });
    this.route('new');
  });
  this.resource('invoices');
  this.resource('invoice', { path: 'invoices/:invoice_id'});
});

Ember.Handlebars.registerBoundHelper('date', function(dateObj) {
  return moment(dateObj).format('MM-DD-YYYY');
});
