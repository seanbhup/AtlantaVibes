import $ from 'jquery'

var PostCommentAction = (postCommentData) => {


    var thePromise = $.ajax({
        method: 'POST',
        url: "http://localhost:3000/postComment",
        data: postCommentData
    });
    return {
        type: "POST_COMMENT",
        payload: thePromise
        
    }
}


export default PostCommentAction;
