import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ScheduleReducer from './schedule_reducer';

const RootReducer = combineReducers({
    session: SessionReducer,
    schedule: ScheduleReducer
});

export default RootReducer;
