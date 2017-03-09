import React, {Component} from "react";




class FestivalCard extends Component {

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="card-wrapper col-xs-10 col-xs-offset-1">
                            <div className="card-header">
                                <div className="card-title text-center">
                                    Music Midtown
                                </div>
                            </div>

                            <div className="card-body col-xs-12">
                                {/*within body, place the festival image on teh left and description on the right */}
                                <div className="card-image-container col-xs-12 text-center">
                                    <img className='card-image' src="../../music-midtownv2.png" alt='Music Midtown Festival'/>
                                </div>

                                <div className='card-rating col-xs-12 text-center'>
                                    music notes
                                </div>

                                <div className="card-description col-xs-12 col-md-6 text-center">
                                    Music Midtown features a diverse lineup of over 30 artists across 4 stages. Be it rock and roll, hip hop, pop, electronic, or anything in between, Music Midtown has been Atlanta’s premier festival for music lovers of all kinds since 1994.
                                </div>

                                <div className="card-lineup col-xs-12 col-md-6 text-center">
                                    <div>Headliner 1 </div>
                                    <div>Headliner 2 </div>
                                    <div>Headliner 3 </div>                                
                                </div>
                            </div>
                        {/*place in stars below both the image and the description to the left  */}
                            

                            

                            <div className='card-comment-body col-xs-8'>
                                comment body 
                            </div>
                            <div className='card-rating col-xs-4'>
                                <button>View More Detail</button>                                
                                <a target="_blank" href='https://www.musicmidtown.com/'><button>Festival Website</button></a>                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FestivalCard
