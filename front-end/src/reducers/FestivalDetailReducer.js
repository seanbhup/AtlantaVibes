export default function(state = [], action){

	switch(action.type){
		case "FESTIVAL_DETAIL":			
			return action.payload;
		default:
			return state;
	}
}
