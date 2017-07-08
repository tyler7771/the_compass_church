export const FETCH_SPEAKERS = "FETCH_SPEAKERS";
export const RECEIVE_ALL_SPEAKERS = "RECEIVE_ALL_SPEAKERS";
export const RECEIVE_SPEAKER = "RECEIVE_SPEAKER";
export const CREATE_SPEAKER = "CREATE_SPEAKER";

export const fetchSpeakers = () => ({
  type: FETCH_SPEAKERS,
});

export const createSpeaker = (speaker) => ({
  type: CREATE_SPEAKER,
  speaker
});

export const receiveAllSpeakers = (speakers) => ({
    type: RECEIVE_ALL_SPEAKERS,
    speakers
});

export const receiveSpeaker = (speaker) => ({
    type: RECEIVE_SPEAKER,
    speaker
});
