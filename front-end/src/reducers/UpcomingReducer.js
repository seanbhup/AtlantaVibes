export default function(state = [], action){

	switch(action.type){
		case "UPCOMING":
            console.log("DREW IS AN EEPER");
			return action.payload;
		default:
			return state;
	}
}
