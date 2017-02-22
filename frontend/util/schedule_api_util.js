export const updateSchedule = (schedule, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/schedules/${schedule.id}`,
    data: {schedule},
    success,
    error
  });
};

export const fetchSchedules = success => {
  $.ajax({
    method: "GET",
    url: "api/schedules",
    success
  });
};
