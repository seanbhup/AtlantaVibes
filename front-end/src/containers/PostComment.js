import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, FormGroup, FormControl} from 'react-bootstrap';

import PostCommentAction from '../actions/PostCommentAction.js';
import {ControlLabel} from "react-bootstrap";


class PostComment extends Component {
    constructor(props) {
        super(props);

        this.submitPost = this.submitPost.bind(this);

        this.state = {
            validation: null,
            postCommentLabel: "post-comment-label-hide",
            postCommentError: null

        }
    }

    submitPost(event){
        event.preventDefault();
        // stop the user from posting if they are not logged in
        if (this.props.loginInfo.isLoggedIn === false){
            this.setState({
                validation: "error",
                postCommentLabel: "post-comment-label-show",
                postCommentError: "Please login to make a comment."
            });
        }else{

            // Theyre logged in
            this.setState({
                validation: null,
                postCommentLabel: "post-comment-label-hide",
                postCommentError: null
            });

            var timestamp = Date.now();

            var username = this.props.loginInfo.name;

            var userPost = event.target.children[0].children[0].value;
            console.dir(event.target)
            var festivalName = this.props.festivalName;
            var festivalId = this.props.festivalId;
            if(userPost === ""){
                this.setState({
                    validation: "error",
                    postCommentLabel: "post-comment-label-show",
                    postCommentError: "You cannot post an empty comment."
                });
            }else{
                this.setState({
                    validation: null,
                    postCommentLabel: "post-comment-label-hide",
                    postCommentError: null
                });
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
                    <FormGroup controlId="formControlsTextarea" validationState={this.state.validation}>

                        <FormControl componentClass="textarea" placeholder="Post A Comment" />
                        <ControlLabel className={this.state.postCommentLabel}>{this.state.postCommentError}</ControlLabel>
                        <Button className='post-button' type='submit' block>Post</Button>
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
