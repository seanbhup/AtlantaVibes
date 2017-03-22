export default function(state = null, action){
	switch(action.type){
		case "FESTIVAL_DETAIL":
			return action.payload;
		case "FESTIVAL_DETAIL_UPDATE":
			state.festival.rating = action.payload;
			return state;
		default:
			return state;
	}
}
