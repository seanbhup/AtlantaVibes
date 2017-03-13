export default function(state = [], action){

	switch(action.type){
		case "FESTIVAL_DETAIL":
			console.log('festival detail reducer ;) ')
			return action.payload;
		default:
			return state;
	}
}
