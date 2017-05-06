const INITIAL_STATE = {
    find: ""
}
export default function reducer(state = INITIAL_STATE, action){
	if (action.type === 'init') {
		return INITIAL_STATE;
    } else if (action.type === 'change_query') {
		return Object.assign({}, state, {
			find: action.val
		});
    }else if (action.type === 'movie_info'){
            return Object.assign({}, state, {
                movieData: action.payload
            });
        }
	else {
		return state;
	}
};
