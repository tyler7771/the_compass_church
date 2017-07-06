export const createSermon = (sermon, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/sermons/',
    data: sermon,
    success,
    error
  });
};

export const updateSermon = (sermon, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/sermons/${sermon.id}`,
    data: {sermon},
    success,
    error
  });
};

export const fetchSermons = success => {
  $.ajax({
    method: "GET",
    url: "api/sermons",
    success
  });
};

export const fetchSermon = (params, success) => {
  $.ajax({
    method: "GET",
    url: `api/sermons/${params.id}`,
    data: {params},
    success
  });
};

export const fetchSermonData = (id, success) => {
  $.ajax({
    type:'GET',
    url: `//vimeo.com/api/v2/video/${id}.json`,
    jsonp: 'callback',
    dataType: 'jsonp',
    success
  });
};

export const deleteSermon = (id, success) => {
  $.ajax({
    method: "DELETE",
    url: `api/sermons/${id}`,
    success
  });
};
