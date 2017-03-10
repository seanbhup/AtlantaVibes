import React, {Component} from "react";


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import FestivalCard from '../components/FestivalCard.js';
import topRatedAction from "../actions/TopRatedAction.js";


class TopRated extends Component {


    // make an ajax call to grab the top festivals after TopRated is loaded
    componentDidMount(){
        this.props.getTopFestivals();

    }

    render() {
        var festivalCards = [];
        console.log(this.props)
        // populate the festival cards array with top rated cards
        this.props.topRated.map((card, index) => {
            return festivalCards.push(<FestivalCard card={card} key={index} />)
        });

        return (
            <div>
                {festivalCards}
            </div>
        )

    }
}

function mapStateToProps(state){
    return{
        topRated: state.topRated
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getTopFestivals: topRatedAction
    }, dispatch)

}


export default connect(mapStateToProps, mapDispatchToProps)(TopRated);
