import { connect } from 'react-redux';
import CreateSermonId from './sermon_id_form';
import { fetchSermonData } from '../../../actions/sermon_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchSermonData: id => dispatch(fetchSermonData(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSermonId);
