export default function(state = {showModal: false}, action){
	switch(action.type){
		case "REGISTER_MODAL":
			return action.payload;
		default:
			return state;
	}
}
