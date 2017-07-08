export const FETCH_SERIESS = "FETCH_SERIESS";
export const RECEIVE_ALL_SERIESS = "RECEIVE_ALL_SERIESS";
export const RECEIVE_SERIES = "RECEIVE_SERIES";
export const CREATE_SERIES = "CREATE_SERIES";

export const fetchSeriess = () => ({
  type: FETCH_SERIESS,
});

export const createSeries = (series) => ({
  type: CREATE_SERIES,
  series
});

export const receiveAllSeriess = (seriess) => ({
  type: RECEIVE_ALL_SERIESS,
  seriess
});

export const receiveSeries = (series) => ({
  type: RECEIVE_SERIES,
  series
});
