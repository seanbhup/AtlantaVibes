import React, {Component} from 'react';
import {Link} from 'react-router';

// bring in necessary modules to provide this component with state
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';


class LandingPage extends Component {

    render() {
        return (
            <div>
                <div className="landing-wrapper">
                    <div className="greeting-register-wrapper container-fluid">
                        <div className="row">
                            <div className="col-xs-12">

                            </div>
                        </div>
                    </div>
                    <div className="intro-wrapper">
                        <div className="row">
                            <div className="text-center intro-text">
                                WELCOME TO ATLANTAVIBES,
                                <br></br>THE BEST RESOURCE FOR ALL YOU MUSIC FESTIVAL NEEDS
                            </div>
                        </div>
                    </div>
                    <div className="buttons-wrapper text-center">
                        <div className="row">

                            <div className="button-div col-xs-4">
                                <Link to="/view-all"><button className='btn'>VIEW ALL</button></Link>
                            </div>
                            <div className="text-center button-div checkout-text col-xs-4">
                                Check out the music scene in Atlanta
                            </div>
                            <div className="button-div col-xs-4">
                                <Link to="/top-rated"><button className='btn'>TOP RATED</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}





// function mapStateToProps(state){
//   return {

//   }
// }
export default LandingPage;
// export default connect(null, mapDispatchToProps)(LandingPage);
