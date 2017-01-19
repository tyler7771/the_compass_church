import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
    errors: state.session.errors
});

const mapDispatchToProps = (dispatch, formType) => {
  return {
    processForm: user => dispatch(login(user)),
    'Log in'
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
