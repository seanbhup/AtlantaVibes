import React, {Component} from "react";
import Rating from "react-rating";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import RatingsModalAction from "../actions/RatingsModalAction.js";
import RatingsAction from "../actions/RatingsAction.js";

var rating;

class Ratings extends Component{
    constructor(props){
        super(props);
        this.handleRating = this.handleRating.bind(this);
        this.handleRatingSubmit = this.handleRatingSubmit.bind(this);

        this.state = {
            rating: ""
        }
    }

    handleRating(event){
        console.log(event);
        rating = event;
    }

    handleRatingSubmit(){
        console.log(rating);

        this.props.getRatings({
            festivalId: this.props.festivalId,
            username: this.props.loginInfo.name,
            rating: rating
        })
        this.props.getRatingsModal({
            showModal: false,
            festivalDetail: {}
        });

    }

    render() {
        return(
            <div className="text-center">
                <Rating onClick={this.handleRating} start={0} stop={5} fractions={10} empty={"glyphicon glyphicon-star-empty"} full={"glyphicon glyphicon-star"}/>
                <div className="submit-rating">
                    <button onClick={this.handleRatingSubmit}>Submit Rating</button>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state){
    return{
        loginInfo: state.login
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getRatingsModal: RatingsModalAction,
        getRatings: RatingsAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
