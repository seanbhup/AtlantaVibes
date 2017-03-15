import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, FormGroup, FormControl} from 'react-bootstrap';

import PostCommentAction from '../actions/PostCommentAction.js';


class PostComment extends Component {
    constructor(props) {
        super(props);

        this.submitPost = this.submitPost.bind(this);
    }

    submitPost(event){
        // event.preventDefault();
        // stop the user from posting if they are not logged in
        if (this.props.loginInfo.isLoggedIn === false){
            alert('We would love to hear what you have to say! Please log in before posting! :D');
        }else{
            var timestamp = Date.now();

            var username = this.props.loginInfo.name;

            var userPost = event.target.children[0].children[0].value;
            var festivalName = this.props.festivalName;
            var festivalId = this.props.festivalId;
            if(userPost === ""){
                alert("You can't post nothing!");
            }
            //grab time to send to backend with message
            


            // pass userPost, who is logged in and time of post to backend
            this.props.postComment({
                timestamp: timestamp,
                username: username,
                userPost: userPost,
                festivalName: festivalName,
                festivalId: festivalId
            });

            // reset form after submission 
            event.target.reset();
        }
    }

    render() {
        return (
            <div>

                <form onSubmit={this.submitPost}>
                    <FormGroup controlId="formControlsTextarea">
                        <FormControl componentClass="textarea" placeholder="Post A Comment" />
                        <Button bsStyle='success' type='submit' block>Post</Button>
                    </FormGroup>

                </form>
            </div>
        );
    }

}

function mapStateToProps(state){
    return{
        loginInfo: state.login
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postComment: PostCommentAction
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(PostComment);
