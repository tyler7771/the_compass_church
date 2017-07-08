import { RECEIVE_ALL_SERIESS,
         RECEIVE_SERIES} from '../actions/series_actions';
import merge from 'lodash/merge';

const _default = {
    series: {},
    errors: []
};

const SeriesReducer = (oldState = _default, action) => {
  switch (action.type) {
    case RECEIVE_ALL_SERIESS:
      return merge({}, oldState, {series: action.seriess});
    case RECEIVE_SERIES:
    const newState = merge({}, oldState);
    newState.series[action.series.id] = action.series;
    return newState;
    default:
      return oldState;
  }
};

export default SeriesReducer;
