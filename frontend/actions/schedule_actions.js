export const FETCH_SCHEDULES = "FETCH_SCHEDULES";
export const RECEIVE_ALL_SCHEDULES = "RECEIVE_ALL_SCHEDULES";
export const UPDATE_SCHEDULE = "UPDATE_SCHEDULE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const fetchSchedules = () => ({
  type: FETCH_SCHEDULES,
});

export const updateSchedule = (schedule) => ({
  type: UPDATE_SCHEDULE,
  schedule
});

export const receiveAllSchedules = (schedules) => ({
  type: RECEIVE_ALL_SCHEDULES,
  schedules
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});
