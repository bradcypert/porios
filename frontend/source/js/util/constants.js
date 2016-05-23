import _ from 'lodash';

export const API_URL = {'local': 'http://localhost:9000/', 'test': 'changeme', 'prod': 'changeme'}['local'];

export const APP_ACTIONS = createActionsFor('SIGNUP', 'LOGIN', 'LOGOUT', 'BACK');

export const PODCAST_ACTIONS = createActionsFor('LOAD_PODCAST', 'LOAD_PODCASTS');

export const USER_ACTIONS = createActionsFor('LOAD_USER', 'UPDATE_USER', 'SHOW_SETTINGS');

function createActionsFor(...args) {
  let actionList = _.flatten(args.map((arg) => {
    return [arg, arg+"_SUCCESS", arg+"_FAILED"];
  }));

  let actions = _.reduce(actionList, (result, item) => {
    result[item] = item;
    return result;
  }, {});

  return actions;
}
