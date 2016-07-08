import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import Router from 'components/router';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index';
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import thunk from 'redux-thunk';
import {loadPodcasts} from './actions/podcast-actions';

const reducer = combineReducers(_.assign({}, reducers));
let initialState = Immutable.Map();

const store = createStore(reducer, initialState, applyMiddleware(thunk));

loadPodcasts(store.dispatch).then(() => {
  ReactDOM.render(<Router store={store} />, document.querySelector('#react-app-mount'));
});
