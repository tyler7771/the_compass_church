import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ScheduleReducer from './schedule_reducer';
import SermonReducer from './sermon_reducer';
import SeriesReducer from './series_reducer';
import SpeakerReducer from './speaker_reducer';

const RootReducer = combineReducers({
    session: SessionReducer,
    schedule: ScheduleReducer,
    sermon: SermonReducer,
    series: SeriesReducer,
    speaker: SpeakerReducer
});

export default RootReducer;
