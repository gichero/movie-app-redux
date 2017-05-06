import $ from 'jquery';

const MOVIE_APP_ID = 'f4e8daf104ab36c53dd94a898a00ca4b';

export const change_query = (event) => ({
	type: 'change_query',
	val: event.target.value
});
export function getMovie(find){
    // console.log('get movie')
    return function(dispatch){
        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/search/?api_key=f4e8daf104ab36c53dd94a898a00ca4b' + find,
            data: {
                q: find,
                units: 'imperial',
                APPID: MOVIE_APP_ID
            }
        })
        .then(data =>
            dispatch({type: 'movie_info', payload: data})
        )
    }
}
