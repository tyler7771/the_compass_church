import { connect } from 'react-redux';
import CreateSermon from './sermon';

const mapStateToProps = state => ({
  sermonData: state.sermon.sermonData
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSermon);
