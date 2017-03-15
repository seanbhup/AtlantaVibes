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

        this.setState({
            comments: this.props.posts
        })
    }

    componentWillReceiveProps(nextProps) {
            console.log(nextProps);
        // console.log(this.props)
        // if (this.props.newComment !== nextProps.newComment) {
        //     console.log('asdf');
        // }
    }

    render() {
        console.log(this.props.newComment)
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
