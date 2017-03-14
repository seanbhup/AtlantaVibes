export default function(state = {}, action){
	switch(action.type){
		case "POST_COMMENT":
			console.log('post comment reducer');
			return action.payload;
		default:
			return state;
	}
}
