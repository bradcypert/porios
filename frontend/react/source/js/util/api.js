import Fetch from 'whatwg-fetch';

import {API_URL} from './constants';

const HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

function doFetch(url, method, payload) {
  let options = {method: method, headers: HEADERS}
  if(payload) {
      options.body = JSON.stringify(payload);
  }
  return fetch(API_URL + url, options).then(handleResponse, handleResponse);
}

function handleResponse(response) {
  if(response.status == 304) {
    return {status: 304}
  } else if(response.status == 400) {
    return response.json().then(json => Promise.reject({status: 400, validationErrors: json.data}));
  } else if(response.ok) {
    return response.json().then(json => {
      return json;
    });
  } else {
    throw Promise.reject(response);
  }
}

export default {
  get: (url) => doFetch(url, 'GET'),

  delete: (url) => doFetch(url, 'DELETE'),

  post: (url, payload) => doFetch(url, 'POST', payload),

  put: (url, payload) => doFetch(url, 'PUT', payload),

  patch: (url, payload) => doFetch(url, 'PATCH', payload),

  setStorage: (storage) => _setStorage(storage),
};
