import Immutable, {fromJS} from 'immutable';
import _ from 'lodash';

import {APP_ACTIONS, PODCAST_ACTIONS} from '../util/constants';

export function podcasts(state = Immutable.List(), action) {
  switch (action.type) {

    case PODCAST_ACTIONS.PODCAST_LIST_SUCCESS:
      return fromJS(action.data);

    case PODCAST_ACTIONS.PODCAST_CREATE_SUCCESS:
      return state.unshift(fromJS(action.team));

    case APP_ACTIONS.LOGOUT:
      return state.clear();

    default:
      return state;
  }
}
