export const createSpeaker = (speaker, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/speakers/',
    data: speaker,
    success
  });
};

export const fetchSpeakers = success => {
  $.ajax({
    method: "GET",
    url: "api/speakers",
    success
  });
};
