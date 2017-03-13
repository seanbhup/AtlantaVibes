import React, {Component} from "react";

class Comments extends Component {

    render() {
        let commentsArray = []
        this.props.comments.map((comment, index) => {
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

export default Comments
