import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ScheduleMiddleware from './schedule_middleware';
import SermonMiddleware from './sermon_middleware';
import SpeakerMiddleware from './speaker_middleware';
import SeriesMiddleware from './series_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ScheduleMiddleware,
  SermonMiddleware,
  SpeakerMiddleware,
  SeriesMiddleware
);

export default RootMiddleware;
