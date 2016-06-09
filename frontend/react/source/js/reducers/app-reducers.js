import Immutable from 'immutable';
import _ from 'lodash';

import {APP_ACTIONS, ENUM_ACTIONS} from '../util/constants';

const EMPTY_LOGIN = Immutable.Map({loggedIn: false, loggingIn: false, loginFailed: false, loginFailedMessage: null, loginError: null});
const LOGGING_IN = EMPTY_LOGIN.set('loggingIn', true);
const LOGIN_SUCCESS = EMPTY_LOGIN.set('loggedIn', true);

export function loginState(state = EMPTY_LOGIN, action) {
  switch (action.type) {

    case APP_ACTIONS.LOGOUT:
      return EMPTY_LOGIN;

    case APP_ACTIONS.LOGIN:
      return LOGGING_IN;

    case APP_ACTIONS.LOGIN_FAIL:
      return EMPTY_LOGIN.merge({loginFailed: true, loginFailedMessage: action.message, loginError: action.error});

    case APP_ACTIONS.LOGIN_SUCCESS:
      return LOGIN_SUCCESS;

    default:
      return state;
  }
}
