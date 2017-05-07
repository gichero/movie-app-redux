import * as ReactRedux from 'react-redux';
import * as actions from './MovieWidget.actions';
import MovieWidget from './MovieWidget'

const MovieWidgetContainer = ReactRedux.connect(

    state => ({
        query: state.query,
        movieResults: state.movieResults,
        error: state.error}),
        {
            change_query: change_query,
            getMovie: getMovie
        }
)(MovieWidget);

export default MovieWidgetContainer
