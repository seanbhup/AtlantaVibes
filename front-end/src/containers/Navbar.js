import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";
import LoginModal from "./LoginModal.js";
import Authorization from "./Authorization.js";
import RegisterModal from "./RegisterModal.js"
import RatingsModal from "./RatingsModal.js"

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

                <RatingsModal />


            </div>
        );
    }

}

export default Navbar1;
