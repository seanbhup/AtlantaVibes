import React, {Component} from "react";


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FestivalDetailAction from "../actions/FestivalDetailAction.js";
import Comments from '../components/Comments.js';
import PostComment from '../containers/PostComment.js';


class FestivalDetail extends Component {

    // make an ajax call to grab the all festivals in order after ViewAll component is loaded
    componentDidMount(){
        // grab festival name
        var festivalName = this.props.params.festival;
        this.props.getFestivalDetail({
            festivalName: festivalName
        });
    }


    render() {
        if (this.props.festivalDetail === null) {
            return(
                <div>asdf</div>
            )
        } else {
            var imageUrl = `http://localhost:3000/images/${this.props.festivalDetail.festival.card_image}`;
            var comments = this.props.festivalDetail.comments;
            return(
                <div className="wrapper">
                    <div className="container">
                        <div className="row in-between-cards">
                            <div className="card-wrapper col-xs-10 col-xs-offset-1">
                                <div className="card-header">
                                    <div className="card-title text-center">
                                        {this.props.festivalDetail.festival.name}
                                    </div>
                                </div>

                                <div className="card-body col-xs-12">
                                    {/*within body, place the festival image on teh left and description on the right */}
                                    <div className="card-image-container col-xs-12 text-center">
                                        <img className='card-image' src={imageUrl} alt='Festival'/>
                                    </div>

                                    <div className='card-rating col-xs-12 text-center'>
                                        {this.props.festivalDetail.festival.rating}
                                    </div>

                                    <div className="card-description col-xs-12 col-md-6 text-center">
                                        {this.props.festivalDetail.festival.description}
                                    </div>

                                    <div className="card-lineup col-xs-12 col-md-6 text-center">
                                        {this.props.festivalDetail.festival.headliners}
                                    </div>
                                </div>
                            {/*place in stars below both the image and the description to the left  */}




                                <div className='card-comment-body col-xs-8'>
                                    <PostComment festivalName={this.props.festivalDetail.festival.name} festivalId={this.props.festivalDetail.festival.id} />
                                    <Comments comments={comments} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

function mapStateToProps(state){
    return{
        festivalDetail: state.festivalDetail
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getFestivalDetail: FestivalDetailAction
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(FestivalDetail);
