export const FETCH_SERMONS = "FETCH_SERMONS";
export const RECEIVE_ALL_SERMONS = "RECEIVE_ALL_SERMONS";
export const RECEIVE_SERMON = "RECEIVE_SERMON";
export const REMOVE_SERMON = "REMOVE_SERMON";
export const CREATE_SERMON = "CREATE_SERMON";
export const UPDATE_SERMON = "UPDATE_SERMON";
export const DELETE_SERMON = "DELETE_SERMON";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const REMOVE_SERMON_DATA = "REMOVE_SERMON_DATA";
export const FETCH_SERMON_DATA = "FETCH_SERMON_DATA";
export const RECEIVE_SERMON_DATA = "RECEIVE_SERMON_DATA";

export const fetchSermons = (params) => ({
  type: FETCH_SERMONS,
  params
});

export const createSermon = (sermon) => ({
  type: CREATE_SERMON,
  sermon
});

export const updateSermon = (sermon) => ({
  type: UPDATE_SERMON,
  sermon
});

export const deleteSermon = (id) => ({
  type: DELETE_SERMON,
  id
});

export const receiveAllSermons = (sermons) => ({
  type: RECEIVE_ALL_SERMONS,
  sermons
});

export const receiveSermon = (sermon) => ({
  type: RECEIVE_SERMON,
  sermon
});

export const removeSermon = (sermon) => ({
  type: REMOVE_SERMON,
  sermon
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});

export const removeSermonData = () => ({
  type: REMOVE_SERMON_DATA
});

export const fetchSermonData = (id) => ({
  type: FETCH_SERMON_DATA,
  id
});

export const receiveSermonData = (sermonData) => ({
  type: RECEIVE_SERMON_DATA,
  sermonData
});
