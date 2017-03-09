import React, {Component} from "react";


// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

// bring in FestivalCard component
import FestivalCard from '../components/FestivalCard.js'


class ViewAll extends Component {

    render() {
        var festivalCards = []
        this.props.viewAll.map((card, index) => {
            festivalCards.push(<FestivalCard imageUrl={card.imageUrl} card />)
        });
        return (
            {festivalCards}
        )
    }
}

export default ViewAll
