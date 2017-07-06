import { connect } from 'react-redux';
import CreateSermonForm from './sermon_form';
import { createSermon,
         removeSermonData } from '../../../actions/sermon_actions';

const mapStateToProps = state => ({
  sermonData: state.sermon.sermonData
});

const mapDispatchToProps = dispatch => ({
  createSermon: sermon => dispatch(createSermon(sermon)),
  removeSermonData: () => dispatch(removeSermonData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSermonForm);
