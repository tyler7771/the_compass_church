import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ScheduleReducer from './schedule_reducer';
import SermonReducer from './sermon_reducer';

const RootReducer = combineReducers({
    session: SessionReducer,
    schedule: ScheduleReducer,
    sermon: SermonReducer
});

export default RootReducer;
