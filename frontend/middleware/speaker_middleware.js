import {
  receiveAllSpeakers,
  receiveSpeaker,
  FETCH_SPEAKERS,
  CREATE_SPEAKER
} from '../actions/speaker_actions';

import {
  createSpeaker,
  fetchSpeakers,
} from '../util/speaker_api_util';
import { hashHistory } from 'react-router';

const SpeakerMiddleware = ({ getState, dispatch }) => next => action => {
  let fetchAllSpeakersSuccess = speakers => dispatch(receiveAllSpeakers(speakers));
  let createSpeakerSuccess = speaker => {
    dispatch(receiveSpeaker(speaker));
  };

  switch (action.type) {
    case FETCH_SPEAKERS:
      fetchSpeakers(fetchAllSpeakersSuccess);
      return next(action);
    case CREATE_SPEAKER:
      createSpeaker(action.speaker, createSpeakerSuccess);
      return next(action);
    default:
      next(action);
  }
};

export default SpeakerMiddleware;
