export default function(state = [], action){

	switch(action.type){
		case "VIEW_ALL":
			return action.payload;
		default:
			return state;
	}
}
