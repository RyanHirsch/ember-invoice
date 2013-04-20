# Ember-Invoice

Invoice application for me to learn Ember.js. Starting off just using Ember Data for fixture data will eventually use something like Rails or Node for the backend.

I also need to start breaking apart the application code into multiple modules. I generally try to use RequireJS but for some reason Ember Data was giving me issues with my hasMany relationships.

Using yeoman webapp for the base with ember-templates

To run

    grunt server

## Routes
### Customers
/customers

/customers/:customer_id

### Invoices
/invoices

/invoices/:invoice_id

/search