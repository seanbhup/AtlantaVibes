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
                    <div className="buttons-wrapper text-center">
                        <div className="row">

                            <div className="button-div col-xs-6">
                                <Link to="/view-all"><button>VIEW ALL</button></Link>
                            </div>
                            <div className="button-div col-xs-6">
                                <Link to="/top-rated"><button>TOP RATED</button></Link>
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
