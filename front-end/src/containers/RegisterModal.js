import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import registerModalAction from '../actions/RegisterModalAction.js';
import Register from "./Register.js"

class RegisterModal extends Component{
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
            <Modal show={this.props.registerModal.showModal} onHide={this.handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center">Register for Atlanta Vibes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Register />
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
        registerModal: state.registerModal
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getModal: registerModalAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);
