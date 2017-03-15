export default function(state = null, action){
	switch(action.type){
		case "FESTIVAL_DETAIL":
			return action.payload;
		default:
			return state;
	}
}
