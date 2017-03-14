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

    submitPost(){
        this.props.postComment();
    }

    render() {
        return (
            <div>
                
                <form>
                    <FormGroup controlId="formControlsTextarea">                    
                        <FormControl componentClass="textarea" placeholder="Post A Comment" />
                        <Button bsStyle='success' onClick={this.submitPost} block>Post</Button>
                    </FormGroup>    

                </form>
            </div>
        );
    }

}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postComment: PostCommentAction        
    }, dispatch);
}


export default connect(null, mapDispatchToProps)(PostComment);
