import { connect } from 'react-redux';
import CreateSermonForm from './sermon_form';
import { createSermon,
         removeSermonData } from '../../../actions/sermon_actions';
import { createSpeaker,
         fetchSpeakers } from '../../../actions/speaker_actions';
import { createSeries,
         fetchSeriess } from '../../../actions/series_actions';

const mapStateToProps = state => ({
  sermonData: state.sermon.sermonData,
  speakers: Object.keys(state.speaker.speaker).map(id => state.speaker.speaker[id]),
  seriess: Object.keys(state.series.series).map(id => state.series.series[id])
});

const mapDispatchToProps = dispatch => ({
  createSermon: sermon => dispatch(createSermon(sermon)),
  removeSermonData: () => dispatch(removeSermonData()),
  createSpeaker: speaker => dispatch(createSpeaker(speaker)),
  fetchSpeakers: () => dispatch(fetchSpeakers()),
  createSeries: series => dispatch(createSeries(series)),
  fetchSeriess: () => dispatch(fetchSeriess())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSermonForm);
