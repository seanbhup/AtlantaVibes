import $ from 'jquery'

var RatingsAction = (ratingsData) => {
    var thePromise = $.ajax({
        method: 'POST',
        url: "http://localhost:3000/festivals/rateFestival",
        data: ratingsData
    });
    console.log("action AS WELL AS... ")
    return {
        type: "RATINGS",
        payload: thePromise

    }
}


export default RatingsAction;
