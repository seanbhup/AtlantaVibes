import React, {Component} from "react";


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import FestivalCard from '../components/FestivalCard.js';
import viewAllAction from "../actions/ViewAllAction.js";


class ViewAll extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getAllFestivals();

    }

    render() {
        var festivalCards = [];
        console.log(this.props)
        this.props.viewAll.map((card, index) => {
            festivalCards.push(<FestivalCard name={card.name} key={index} />)
            
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
        viewAll: state.viewAll
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getAllFestivals: viewAllAction
    }, dispatch)

}


export default connect(mapStateToProps, mapDispatchToProps)(ViewAll);
