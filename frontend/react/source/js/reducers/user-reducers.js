import Immutable from 'immutable';

import {APP_ACTIONS, USER_ACTIONS} from '../util/constants';

const EMPTY_USER = Immutable.Map({id: 0, email: ''});

export function user(state = EMPTY_USER, action) {
  switch(action.type) {

    case USER_ACTIONS.LOAD_USER_SUCCESS:
      return Immutable.fromJS(action.data);

    case APP_ACTIONS.LOGOUT:
      return EMPTY_USER;

    default:
      return state;
  }
}
