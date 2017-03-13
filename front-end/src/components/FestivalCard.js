import React, {Component} from "react";
import {Link} from "react-router";




class FestivalCard extends Component {

    render() {
        var imageUrl = `http://localhost:3000/images/${this.props.card.card_image}`;
        var viewMoreDetailLinkTag = '/view-more/' + this.props.card.name;
        // encode link tag to avoid special characters and spaces
        viewMoreDetailLinkTag = encodeURI((viewMoreDetailLinkTag));


        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row in-between-cards">
                        <div className="card-wrapper col-xs-10 col-xs-offset-1">
                            <div className="card-header">
                                <div className="card-title text-center">
                                    {this.props.card.name}
                                </div>
                            </div>

                            <div className="card-body col-xs-12">
                                {/*within body, place the festival image on teh left and description on the right */}
                                <div className="card-image-container col-xs-12 text-center">
                                    <img className='card-image' src={imageUrl} alt='Festival'/>
                                </div>

                                <div className='card-rating col-xs-12 text-center'>
                                    {this.props.card.rating}
                                </div>

                                <div className="card-description col-xs-12 col-md-6 text-center">
                                    {this.props.card.description}
                                </div>

                                <div className="card-lineup col-xs-12 col-md-6 text-center">
                                    {this.props.card.headliners}
                                </div>
                            </div>
                        {/*place in stars below both the image and the description to the left  */}




                            <div className='card-comment-body col-xs-8'>
                                {/* {this.props.card.comments} */}
                            </div>
                            <div className='card-rating col-xs-4'>
                                <Link to={viewMoreDetailLinkTag}><button>View More Detail</button></Link>
                                <a target="_blank" href={this.props.card.festival_url}><button>Festival Website</button></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FestivalCard
