import React, {Component} from "react";


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import FestivalCard from '../components/FestivalCard.js';
import FestivalDetailAction from "../actions/FestivalDetailAction.js";


class FestivalDetail extends Component {

    // make an ajax call to grab the all festivals in order after ViewAll component is loaded
    componentDidMount(){
        // grab festival name
        var festivalName = this.props.params.festival;
        this.props.getFestivalDetail({festivalNameKey: festivalName});


    }

    render() {
        // var festivalCards = [];
        // console.log(this.props)
        // // populate the festivalCards array with all of the music festivals, ordered by date
        // this.props.viewAll.map((card, index) => {
        //     return festivalCards.push(<FestivalCard card={card} key={index} />)

        // });

        // return (
        //     <div>
        //         {festivalCards}
        //     </div>
        // )
        return (
            <div> festival detail</div>
        )
    }
}

// function mapStateToProps(state){
//     return{
//         viewAll: state.viewAll
//     }
// }

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getFestivalDetail: FestivalDetailAction
    }, dispatch)

}


export default connect(null, mapDispatchToProps)(FestivalDetail);
