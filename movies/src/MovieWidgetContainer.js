import * as ReactRedux from 'react-redux';
import * as actions from
'./MovieWidget.actions';
import MovieWidget from './MovieWidget'

const MovieWidgetContainer = ReactRedux.connect(
    state => ({movieData: state.movieData}),
    // state => ({find: state.find}),
    actions
)(MovieWidget);

export default MovieWidgetContainer
