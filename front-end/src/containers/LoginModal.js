import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";

class LoginModal extends Component{
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        };
        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);

    }

    handleModalOpen(event) {
        this.setState({showModal: true});
        console.log("looeoe")
    }

    handleModalClose(event) {
        this.setState({showModal: false})
    }

    render() {
        return (
            <Modal show={this.state.showModal} onHide={this.handleModalClose}>
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

export default LoginModal;
