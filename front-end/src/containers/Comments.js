import React, {Component} from "react";
import {connect} from 'react-redux';
import dateformat from 'dateformat';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        this.setState({
            comments: this.props.posts
        });
    }

    componentWillReceiveProps(nextProps) {
        // create an array that will hold the set of old comments in addition to the new comment
        var commentsArrayWithNewComment = this.state.comments;
        console.log(nextProps.newComment);
        console.log(typeof nextProps.newComment.timestamp);
        // add the new comment to the array
        commentsArrayWithNewComment.unshift(nextProps.newComment);
        // rerender the page with the new set of comments
        if (this.props.newComment !== nextProps.newComment) {
            this.setState({
                comments: commentsArrayWithNewComment
            })
        }
    }

    render() {
        
        let commentsArray = []
        this.state.comments.map((comment, index) => {            

            var date = new Date(comment.timestamp)
            var niceLookingDate = dateformat(date, 'fullDate');
            var niceLookingTime = dateformat(date, 'shortTime');


            console.log(niceLookingTime); 
            console.log(niceLookingDate);
            var dateString = String(date);            
            return commentsArray.push(
                <tr key={index}>                    
                    <td className="comment">
                      <p>{comment.username}</p>
                      <p>{comment.comment}</p>                                            
                    </td>
                    <td>
                        <p>{niceLookingDate}</p>                      
                        <p>{niceLookingTime}</p>                      
                    </td>

                </tr>
            )
        })
        return (
            <table className="table table-striped">
                <tbody>
                    {commentsArray}
                </tbody>
            </table>
        )

    }
}

function mapStateToProps(state) {
    return {
        posts: state.festivalDetail.comments,
        newComment: state.postedComment
    }
}

export default connect(mapStateToProps, null)(Comments);
