import React, {Component} from "react";


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import FestivalCard from '../components/FestivalCard.js';
import topRatedAction from "../actions/TopRatedAction.js";


class TopRated extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getTopFestivals();

    }

    render() {
        var festivalCards = [];
        console.log(this.props)
        this.props.topRated.map((card, index) => {
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
        topRated: state.topRated
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getTopFestivals: topRatedAction
    }, dispatch)

}


export default connect(mapStateToProps, mapDispatchToProps)(TopRated);
