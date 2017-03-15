import $ from 'jquery'

var RegisterAction = (registerData) => {

    var formData = new FormData();
    formData.append('username', registerData.username);
    formData.append('email', registerData.email);
    formData.append('password', registerData.password);
    formData.append('avatarImage', registerData.avatarImage);

    var thePromise = $.ajax({
        method: 'POST',
        url: "http://localhost:3000/register",
        processData: false,
        dataType: 'json',
        cache: false,
        data: formData,
        contentType: false
	});
    return {
        type: "REGISTER",
        payload: thePromise
    }
}


export default RegisterAction;
