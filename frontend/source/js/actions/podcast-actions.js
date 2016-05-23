import {PODCAST_ACTIONS} from '../util/constants';
import API from '../util/api';

export function loadPodcasts(dispatch) {
  return API.get('podcasts')
       .then((json) => {
         dispatch({type: PODCAST_ACTIONS.LOAD_PODCASTS_SUCCESS, data: json});
         return json;
       })
       .catch((e) => {
         console.log('error', e);
       });
}
