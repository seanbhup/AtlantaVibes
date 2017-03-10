export default function(state = [], action){

	switch(action.type){
		case "TOP_RATED":
            // console.log("DREW IS AN EEPER");
			return action.payload;
		default:
			return state;
	}
}
