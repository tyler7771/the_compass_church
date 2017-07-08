import { RECEIVE_ALL_SERMONS,
         RECEIVE_SERMON,
         RECEIVE_SERMON_DATA,
         REMOVE_SERMON,
         RECEIVE_ERRORS,
         REMOVE_ERRORS,
         REMOVE_SERMON_DATA} from '../actions/sermon_actions';
import merge from 'lodash/merge';

const _default = {
    sermon: {},
    sermonData: {},
    errors: []
};

const SermonsReducer = (oldState = _default, action) => {
  switch (action.type) {
    case RECEIVE_ALL_SERMONS:
      return merge({}, {sermon: action.sermons});
    case RECEIVE_SERMON:
      return merge({}, oldState, {sermon: action.sermon, errors: []});
    case RECEIVE_SERMON_DATA:
      return merge({}, oldState, {sermon: {}, sermonData: action.sermonData, errors: []});
    case REMOVE_SERMON:
      let newState = merge({}, oldState);
      for(let attr in newState) {
        delete newState[attr][action.sermon.id];
      }
      return newState;
    case RECEIVE_ERRORS:
      return merge({}, oldState, action.errors);
    case REMOVE_ERRORS:
      let removeState = merge({}, oldState);
      removeState.errors = [];
      return removeState;
    case REMOVE_SERMON_DATA:
      let removeDataState = merge({}, oldState);
      removeDataState.sermonData = {};
      return removeDataState;
    default:
      return oldState;
  }
};

export default SermonsReducer;
