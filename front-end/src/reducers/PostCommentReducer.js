export default function(state = "Test", action){
	switch(action.type){
		case "POST_COMMENT":
			console.log(action.payload);
			return action.payload;
		default:
			console.log(state);
			return state;
	}
}
