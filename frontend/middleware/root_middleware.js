import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ScheduleMiddleware from './schedule_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ScheduleMiddleware
);

export default RootMiddleware;
