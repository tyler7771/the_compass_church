import { connect } from 'react-redux';
import SermonIndex from './sermon_index';
import { fetchSermons } from '../../actions/sermon_actions';
import { fetchSpeakers } from '../../actions/speaker_actions';
import { fetchSeriess } from '../../actions/series_actions';

const mapStateToProps = state => ({
  sermons: Object.keys(state.sermon.sermon).map(id => state.sermon.sermon[id]),
  speakers: Object.keys(state.speaker.speaker).map(id => state.speaker.speaker[id]),
  seriess: Object.keys(state.series.series).map(id => state.series.series[id])
});

const mapDispatchToProps = dispatch => ({
  fetchSermons: params => dispatch(fetchSermons(params)),
  fetchSeriess: () => dispatch(fetchSeriess()),
  fetchSpeakers: () => dispatch(fetchSpeakers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SermonIndex);
