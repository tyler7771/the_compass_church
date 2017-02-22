import {
  receiveAllSchedules,
  FETCH_SCHEDULES,
  UPDATE_SCHEDULE,
  receiveErrors
} from '../actions/schedule_actions';
import {
  updateSchedule,
  fetchSchedules,
} from '../util/schedule_api_util';
import { hashHistory } from 'react-router';

const ScheduleMiddleware = ({ getState, dispatch }) => next => action => {
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));
  let fetchAllSchedulesSuccess = schedules => dispatch(receiveAllSchedules(schedules));

  switch (action.type) {
    case FETCH_SCHEDULES:
      fetchSchedules(fetchAllSchedulesSuccess);
      return next(action);
    case UPDATE_SCHEDULE:
      updateSchedule(action.schedule, fetchScheduleSuccess);
      return next(action);
    default:
      next(action);
  }
};

export default ScheduleMiddleware;
