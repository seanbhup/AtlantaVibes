import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import loginModalAction from '../actions/LoginModalAction.js';
import Login from "./Login.js"

class LoginModal extends Component{
    constructor(props) {
        super(props);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleModalClose() {
        this.props.getModal({
            showModal: false
        })
    }

    render() {
        return (
            <Modal show={this.props.loginModal.showModal} onHide={this.handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center">Login and tell us about a music festival!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleModalClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

function mapStateToProps(state){
    return {
        loginModal: state.loginModal
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getModal: loginModalAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
