import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ViewAll extends Component {

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
                          <div className="card-body">
                            <div className="card-image">

                            </div>
                          </div>


                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default ViewAll
