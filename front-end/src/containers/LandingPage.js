import React, {Component} from 'react';
import Register from './Register.js';
import {Link} from 'react-router';

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
                    <div className="how-it-works-wrapper text-center">
                        <div className="row">
                            <div className="step-1 step col-xs-4">
                                <button>UPCOMING</button>
                            </div>
                            <div className="step-2 step col-xs-4">
                                <Link to="/view-all"> <button>VIEW ALL</button></Link>
                            </div>
                            <div className="step-3 step col-xs-4">
                                <button>TOP RATED/DONATE</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default LandingPage
