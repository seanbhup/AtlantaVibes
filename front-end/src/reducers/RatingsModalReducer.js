export default function(state = {showModal: false, festivalDetail: {}}, action){
	switch(action.type){
		case "RATINGS_MODAL":
            console.log(action.payload);
			return action.payload;
		default:
			return state;
	}
}
