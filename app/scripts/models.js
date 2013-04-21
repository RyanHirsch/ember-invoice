App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.Customer = DS.Model.extend({
  invoices: DS.hasMany('App.Invoice'),
  name: DS.attr('string'),
  invoiceCount: function() {
    return this.get('invoices.length');
  }.property('invoices.@each')
});

App.Invoice = DS.Model.extend({
  customer: DS.belongsTo('App.Customer'),
  invoiceItems: DS.hasMany('App.InvoiceItem'),
  description: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  invoiceDate: DS.attr('date')
});


App.InvoiceItem = DS.Model.extend({
  description: DS.attr('string')
});

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
    customer: 1,
    invoiceItems: [100,105]
  },
  {
    id: 12,
    startDate: new Date('4/03/2013'),
    description: 'Some Normal Project',
    customer: 1,
    invoiceItems: [110, 120, 130]
  },
  {
    id: 11,
    startDate: new Date('2/03/2013'),
    description: 'Middle Project',
    customer: 1,
    invoiceItems: []
  },
  {
    id: 13,
    startDate: new Date('2/04/2013'),
    description: 'Some Other Project',
    customer: 2,
    invoiceItems: []
  }
];

App.InvoiceItem.FIXTURES = [
  {
    id: 100,
    description: 'Item 1 Ryan'
  },
  {
    id: 105,
    description: 'Item 2 Ryan'
  },
  {
    id: 110,
    description: 'Normal Item 1'
  },
  {
    id: 120,
    description: 'Normal Item 2'
  },
  {
    id: 130,
    description: 'Normal Item 3'
  }
];