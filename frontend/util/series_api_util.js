export const createSeries = (series, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/seriess/',
    data: series,
    success
  });
};

export const fetchSeriess = success => {
  $.ajax({
    method: "GET",
    url: "api/seriess",
    success
  });
};
