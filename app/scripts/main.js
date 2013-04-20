require.config({
  paths: {
    jquery: '../components/jquery/jquery',
    bootstrap: 'vendor/bootstrap',
    handlebars: '../components/handlebars/handlebars',
    ember: ['//cdnjs.cloudflare.com/ajax/libs/ember.js/1.0.0-rc.2/ember.min', '../components/ember'],
    moment: '../components/moment/moment',
    'ember-data': ['https://s3.amazonaws.com/builds.emberjs.com/ember-data-latest', '../components/ember-data/ember-data']
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    ember: {
      deps: ['jquery', 'handlebars'],
      exports: 'Ember'
    },
    handlebars: {
      deps: ['jquery'],
      exports: 'Handlebars'
    },
    app: {
      deps: ['bootstrap', 'ember', 'ember-data', 'templates', 'moment']
    },
    moment: {
      exports: 'moment'
    },
    templates: {
      deps: ['ember']
    },
    'ember-data': {
      deps: ['ember']
    }
  }
});

require(['app']);