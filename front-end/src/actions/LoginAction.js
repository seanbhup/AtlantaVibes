// import $ from "jquery";
import axios from "axios";

var LoginAction = (loginData)=>{
    var thePromise =
        axios({
            method: "POST",
            url: "http://localhost:3000/login",
            data: loginData
        });
    // console.log(thePromise);
    return{
        type: "LOGIN",
        payload: thePromise
    }
}


export default LoginAction;
