import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    Form,
    FormGroup,
    FormControl,
    Button,
    Col
} from 'react-bootstrap';

import RegisterAction from '../actions/RegisterAction.js';

// bring in register message from root reducer

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
    }

    componentDidUpdate() {
        var registerMessage = this.props.register.msg;
        console.log('*************************************')
        console.log(registerMessage)
        console.log('*************************************')
        if (registerMessage === "userExists") {
            alert(registerMessage);
        }

    }
    handleRegistrationSubmit(event) {
        event.preventDefault();
        var username = event.target[0].value;
        var email = event.target[1].value;
        var password = event.target[2].value;
        var repeatPassword = event.target[3].value;

        if (password !== repeatPassword) {
            alert('Passwords do not match');
        } else {
            this.props.registerAction({username: username, email: email, password: password});
        }

    }

    render() {
        return (
            <Form horizontal onSubmit={this.handleRegistrationSubmit}>
                <FormGroup controlId="formHorizontalName">
                    <Col smOffset={2} sm={8}>
                        <FormControl type="text" placeholder="Full Name"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">

                    <Col smOffset={2} sm={8}>
                        <FormControl type="email" placeholder="Email"/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">

                    <Col smOffset={2} sm={8}>
                        <FormControl type="password" placeholder="Password"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col smOffset={2} sm={8}>
                        <FormControl type="password" placeholder="Password"/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={8}>
                        <Button className="register-button" bsStyle="warning" bsSize="small" type="submit">
                            Register FOR PHASER
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

function mapStateToProps(state) {
    return {register: state.register}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        registerAction: RegisterAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
