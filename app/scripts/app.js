/* Ember and Ember-Data are shimmed in as deps */
// define([], function () {
//   'use strict';
  var App = Ember.Application.create();
  App.Router.map(function() {
    this.resource('customers', function() {
      this.resource('customer', { path: ':customer_id' });
    });
  });

  App.CustomersRoute = Ember.Route.extend({
    model: function() {
      return App.Customer.find();
    }
  });

  App.InvoicesController = Ember.ArrayController.extend({
    sortProperties: ['startDate'],
    sortAscending: false
  });


  App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter'
  });

  App.Customer = DS.Model.extend({
    invoices: DS.hasMany('App.Invoice'),
    name: DS.attr('string')
  });

  App.Invoice = DS.Model.extend({
    customer: DS.belongsTo('App.Customer'),
    description: DS.attr('string'),
    startDate: DS.attr('date'),
  });

  // App.InvoiceItem = DS.Model.extend({
  //   description: DS.attr('string')
  // });

  App.Customer.FIXTURES = [
    {
      id: 1,
      name: 'Ryan',
      invoices: [10, 12, 11]
    },
    {
      id: 2,
      name: 'Andi',
      invoices: [13]
    },
    {
      id: 3,
      name: 'Joe',
      invoices: []
    }
  ];

  App.Invoice.FIXTURES = [
    {
      id: 10,
      startDate: new Date('1/05/2013'),
      description: 'Some Crazy Project',
      customer: 1
    },
    {
      id: 12,
      startDate: new Date('4/03/2013'),
      description: 'Some Normal Project',
      customer: 1
    },
    {
      id: 11,
      startDate: new Date('2/03/2013'),
      description: 'Middle Project',
      customer: 1
    },
    {
      id: 13,
      startDate: new Date('2/04/2013'),
      description: 'Some Other Project',
      customer: 2
    }
  ];

  // return App;
// });