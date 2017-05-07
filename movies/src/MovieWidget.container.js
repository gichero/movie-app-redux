import * as ReactRedux from 'react-redux';
import * as actions from './MovieWidget.actions';
import MovieWidget from './MovieWidget'

const container = ReactRedux.connect(

    state => ({
        query: state.query,
        movieResults: state.movieResults,
        error: state.error}),

        actions
)(MovieWidget);

export default container
