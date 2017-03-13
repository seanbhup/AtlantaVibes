import React, {Component} from "react";


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import FestivalCard from '../components/FestivalCard.js';
import upcomingAction from "../actions/UpcomingAction.js";


class Upcoming extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getUpcomingFestivals();

    }

    render() {
        var festivalCards = [];
        console.log(this.props)
        this.props.upcoming.map((card, index) => {
            festivalCards.push(<FestivalCard
                                    card={card}
                                    key={index} />)
        });

        return (
            <div>
                {festivalCards}
            </div>
        )

    }
}

function mapStateToProps(state){
    // console.log(state.viewAll);
    return{
        upcoming: state.upcoming
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getUpcomingFestivals: upcomingAction
    }, dispatch)

}


export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);
