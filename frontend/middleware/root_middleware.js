import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ScheduleMiddleware from './schedule_middleware';
import SermonMiddleware from './sermon_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ScheduleMiddleware,
  SermonMiddleware
);

export default RootMiddleware;
