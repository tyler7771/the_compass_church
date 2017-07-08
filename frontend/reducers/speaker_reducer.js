import { RECEIVE_ALL_SPEAKERS,
         RECEIVE_SPEAKER} from '../actions/speaker_actions';
import merge from 'lodash/merge';

const _default = {
    speaker: {},
    errors: []
};

const SpeakerReducer = (oldState = _default, action) => {
  switch (action.type) {
    case RECEIVE_ALL_SPEAKERS:
      return merge({}, oldState, {speaker: action.speakers});
    case RECEIVE_SPEAKER:
      const newState = merge({}, oldState);
      newState.speaker[action.speaker.id] = action.speaker;
      return newState;
    default:
      return oldState;
  }
};

export default SpeakerReducer;
