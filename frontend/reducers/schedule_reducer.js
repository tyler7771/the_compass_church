import { RECEIVE_ALL_SCHEDULES,
         RECEIVE_ERRORS,
          REMOVE_ERRORS} from '../actions/schedule_actions';
import merge from 'lodash/merge';

const _default = {
    schedule: {},
    errors: []
};

const SchedulesReducer = (oldState = _default, action) => {
  switch (action.type) {
    case RECEIVE_ALL_SCHEDULES:
      return merge({}, oldState, {schedule: action.schedules});
    case RECEIVE_ERRORS:
      return merge({}, oldState, action.errors);
    case REMOVE_ERRORS:
      let removeState = merge({}, oldState);
      removeState.errors = [];
      return removeState;
    default:
      return oldState;
  }
};

export default SchedulesReducer;
