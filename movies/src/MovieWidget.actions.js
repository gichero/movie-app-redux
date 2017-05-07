import $ from 'jquery';

export const change_query = (event) => ({
	type: 'change_query',
	val: event.target.value
});
export function getMovie(query){
    //console.log('get movie')
    return function(dispatch){
        $.ajax({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            data: {
                api_key: 'f4e8daf104ab36c53dd94a898a00ca4b',
                q: find
            }

        })
        .then(data => {

            dispatch({type: 'movie-search-results',
                      payload: data.results})

        })
        .catch(err => {
     let error = (err && err.responseJSON && err.responseJSON.status_message) || 'Something went wrong';
     dispatch({
       type: 'error',
       error: error
     });
   });

    }
}
