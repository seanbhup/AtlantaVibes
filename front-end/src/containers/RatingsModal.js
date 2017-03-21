import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Modal, Button } from 'react-bootstrap';
import RatingsModalAction from "../actions/RatingsModalAction.js";
import Ratings from "./Ratings.js";

class RatingsModal extends Component {
    constructor(props) {
        super(props);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleModalClose() {
        this.props.getRatingsModal({
            showModal: false,
            festivalDetail: {}
        });
    }

    render() {
        console.log(this.props)
        return(
            <Modal show={this.props.ratingsModal.showModal} onHide={this.handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center">Rate {this.props.ratingsModal.festivalDetail.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Ratings festivalId={this.props.ratingsModal.festivalDetail.id}/>
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
        ratingsModal: state.ratingsModal
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getRatingsModal: RatingsModalAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingsModal);
