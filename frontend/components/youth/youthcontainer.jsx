import { connect } from 'react-redux';
import Youth from './youth';
import { fetchSchedules, updateSchedule } from '../../actions/schedule_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  schedules: Object.keys(state.schedule.schedule).map(id => state.schedule.schedule[id])
});

const mapDispatchToProps = dispatch => ({
  fetchSchedules: () => dispatch(fetchSchedules()),
  updateSchedule: (schedule) => dispatch(fetchSchedules(schedule))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Youth);
