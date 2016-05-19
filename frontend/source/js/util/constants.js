import _ from 'lodash';

export const API_URL = {'local': 'http://localhost:8080/', 'test': 'changeme', 'prod': 'changeme'}['local'];

export const APP_ACTIONS = createActionsFor('SIGNUP', 'LOGIN', 'LOGOUT', 'BACK');

export const PODCAST_ACTIONS = createActionsFor('LOAD_PODCAST', 'LOAD_PODCASTS');

export const USER_ACTIONS = createActionsFor('LOAD_USER', 'UPDATE_USER', 'SHOW_SETTINGS');

function createActionsFor(...args) {
  return _.flatten(args.map((arg) => {
    return [arg, arg+"_SUCCESS", arg+"_FAILED"];
  }));
}
