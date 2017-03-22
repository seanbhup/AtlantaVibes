
// This simply opens or closes the modal and passes specific festival card info on. It does not make any ajax calls
export default function(modalState){
	return{
		type: "RATINGS_MODAL",
		payload: modalState
	}
}
