export default function(authState){
    console.log(authState);
	return{
		type: "LOGOUT",
		payload: authState
	}
}
