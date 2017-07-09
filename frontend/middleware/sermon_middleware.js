import {
  receiveSermon,
  receiveAllSermons,
  receiveSermonData,
  removeSermon,
  FETCH_SERMONS,
  FETCH_LATEST_SERMON,
  FETCH_SERMON_DATA,
  CREATE_SERMON,
  UPDATE_SERMON,
  DELETE_SERMON,
  receiveErrors
} from '../actions/sermon_actions';

import {
  createSermon,
  deleteSermon,
  updateSermon,
  fetchSermons,
  fetchLatestSermon,
  fetchSermonData
} from '../util/sermon_api_util';
import { hashHistory } from 'react-router';

const SermonsMiddleware = ({ getState, dispatch }) => next => action => {
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));
  let fetchAllSermonsSuccess = sermons => dispatch(receiveAllSermons(sermons));
  let fetchSermonDataSuccess = sermon => dispatch(receiveSermonData(sermon[0]));
  let fetchSermonSuccess = sermon => dispatch(receiveSermon(sermon));
  let createSermonSuccess = sermon => {
    dispatch(receiveSermon(sermon));
    hashHistory.push(`/admin`);
  };
  let removeSermonSuccess = id => {
    dispatch(removeSermon(id));
  };

  switch (action.type) {
    case FETCH_SERMONS:
      fetchSermons(action.params, fetchAllSermonsSuccess);
      return next(action);
    case FETCH_LATEST_SERMON:
      fetchLatestSermon(fetchSermonSuccess);
      return next(action);
    case FETCH_SERMON_DATA:
      fetchSermonData(action.id, fetchSermonDataSuccess);
      return next(action);
    case CREATE_SERMON:
      createSermon(action.sermon, createSermonSuccess, errorCallback);
      return next(action);
    case UPDATE_SERMON:
      updateSermon(action.sermon, fetchSermonSuccess);
      return next(action);
    case DELETE_SERMON:
      deleteSermon(action.id, removeSermonSuccess);
      return next(action);
    default:
      next(action);
  }
};

export default SermonsMiddleware;
