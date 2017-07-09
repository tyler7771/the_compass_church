import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';
import { fetchLatestSermon } from '../../actions/sermon_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  sermon: state.sermon.sermon
});

const mapDispatchToProps = dispatch => ({
  fetchLatestSermon: () => dispatch(fetchLatestSermon()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
