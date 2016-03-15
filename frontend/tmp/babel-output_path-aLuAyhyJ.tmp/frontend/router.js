import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('podcasts', function () {
    this.route('view', { path: '/:id' });
  });
});

export default Router;