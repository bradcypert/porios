import {USER_ACTIONS} from '../util/constants';
import API from '../util/api';

export function loadCurrentUser() {
  return API.get('user')
       .then((json) => {
         dispatch({type: USER_ACTIONS.LOAD_USER_SUCCESS, user: json.data});
         return json.data;
       })
       .catch(errorHandler(dispatch, USER_ACTIONS.LOAD_USER_FAILED));
}
