import React, {Component} from 'react';
import {Link} from 'react-router';

// bring in necessary modules to provide this component with state
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';


import ViewAllAction from '../actions/ViewAllAction.js';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        // this.handleViewAllSubmit = this.handleViewAllSubmit.bind(this);
    }


    // handleViewAllSubmit(){
    //     this.props.viewAll()
    // }
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
                                <Link to="/upcoming"> <button>UPCOMING</button></Link>
                            </div>
                            <div className="step-2 step col-xs-4">
                                <Link to="/view-all"> <button>VIEW ALL</button></Link>
                            </div>
                            <div className="step-3 step col-xs-4">
                                <Link to="/top-rated"> <button>TOP RATED</button></Link>
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
