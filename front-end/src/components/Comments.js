import React, {Component} from "react";
import {connect} from 'react-redux';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        console.log(this.props.posts);
        this.setState({
            comments: this.props.posts
        })
    }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.posts !== nextProps.posts) {
    //         console.log(nextProps.posts);
    //         this.setState({
    //             comments: nextProps.posts
    //         });
    //     }
    // }

    componentDidUpdate() {
        // var updatedComments = []
        // updatedComments.push(this.state.comments);
        // this.setState({
        //     comments: updatedComments
        // });
        console.log(this.props.newComment);
    }

    render() {
        let commentsArray = []
        this.state.comments.map((comment, index) => {
            return commentsArray.push(
                <tr key={index}>
                    <td className="comment">
                      <p>{comment.username}</p>
                      <p>{comment.comment}</p>
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
