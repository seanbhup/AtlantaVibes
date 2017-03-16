import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Navbar} from "react-bootstrap";
import LoginModal from "./LoginModal.js";
import Authorization from "./Authorization.js";
import RegisterModal from "./RegisterModal.js"
import loginModalAction from '../actions/LoginModalAction.js'
import registerModalAction from "../actions/RegisterModalAction.js"

class Navbar1 extends Component {

    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">AtlantaVibes</a>
                        </Navbar.Brand>
                        <Navbar.Toggle>
                            <span className="glyphicon glyphicon-headphones"></span>
                        </Navbar.Toggle>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Authorization className="login-register"/>
                    </Navbar.Collapse>
                </Navbar>

                <LoginModal />

                <RegisterModal />


            </div>
        );
    }

}

// map get modal to props so that our loginModalAction can listen for a click to the login button
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getLoginModal: loginModalAction,
        getRegisterModal: registerModalAction

    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Navbar1);
