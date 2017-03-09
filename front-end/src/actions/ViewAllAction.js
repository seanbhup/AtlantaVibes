import $ from "jquery";
// import axios from "axios";

var ViewAll = (viewAllData)=>{
    
    // var thePromise =
    //     $.ajax({
    //         method: "GET",
    //         url: "http://localhost:3000/viewAll",
    //         data: viewAllData
    //     }); 
    // console.log(thePromise);
    return{
        type: "VIEW_ALL",
        // payload: thePromise
    }
}


export default ViewAll;
