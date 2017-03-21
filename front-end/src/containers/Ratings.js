import React, {Component} from "react";
import Rating from "react-rating";

class Ratings extends Component {
    render() {
        return(
            <div className="text-center">
                <Rating start={0} stop={10} fractions={10} empty={"glyphicon glyphicon-star-empty"} full={"glyphicon glyphicon-star"}/>
            </div>

        )
    }
}

export default Ratings;
