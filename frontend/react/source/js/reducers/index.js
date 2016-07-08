import _ from 'lodash';

import * as appReducers from './app-reducers';
import * as podcastReducers from './podcast-reducers';
import * as userReducers from './user-reducers';

export default _.assign({}, appReducers, podcastReducers, userReducers);
