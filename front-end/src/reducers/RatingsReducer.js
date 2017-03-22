export default function(state = {}, action){
	switch(action.type){
		case "RATINGS":			
			return action.payload;
		default:
			return state;
	}
}
