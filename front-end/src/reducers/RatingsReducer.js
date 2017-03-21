export default function(state = {}, action){
	switch(action.type){
		case "RATINGS":
            console.log("im a human")
			return action.payload;
		default:
			return state;
	}
}
