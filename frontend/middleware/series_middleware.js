import {
  receiveAllSeriess,
  receiveSeries,
  FETCH_SERIESS,
  CREATE_SERIES
} from '../actions/series_actions';

import {
  createSeries,
  fetchSeriess,
} from '../util/series_api_util';
import { hashHistory } from 'react-router';

const SeriesMiddleware = ({ getState, dispatch }) => next => action => {
  let fetchAllSeriessSuccess = seriess => dispatch(receiveAllSeriess(seriess));
  let createSeriesSuccess = series => {
    dispatch(receiveSeries(series));
  };

  switch (action.type) {
    case FETCH_SERIESS:
      fetchSeriess(fetchAllSeriessSuccess);
      return next(action);
    case CREATE_SERIES:
      createSeries(action.series, createSeriesSuccess);
      return next(action);
    default:
      next(action);
  }
};

export default SeriesMiddleware;
