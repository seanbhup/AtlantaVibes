export default function(state = null, action){

	switch(action.type){
		case "FESTIVAL_DETAIL":
			console.log(action.payload);
			return action.payload;
		default:
			return state;
	}
}
