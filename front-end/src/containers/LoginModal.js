import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import loginModalAction from '../actions/LoginModalAction.js'

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
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Text in a modal</h4>
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
