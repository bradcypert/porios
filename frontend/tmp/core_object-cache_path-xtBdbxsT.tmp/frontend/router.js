define('frontend/router', ['exports', 'ember', 'frontend/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('podcasts', function () {
      this.route('view', { path: '/:id' });
    });
  });

  exports['default'] = Router;

});