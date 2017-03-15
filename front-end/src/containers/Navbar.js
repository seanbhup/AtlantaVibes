import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
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
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Link</NavItem>
                            <NavItem eventKey={2} href="#">Link</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Authorization />
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
