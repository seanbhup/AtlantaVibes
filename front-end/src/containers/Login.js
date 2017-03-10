import React, {Component} from 'react';
import {
    Form,
    FormGroup,
    FormControl,
    Button,
    Col
} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginAction from "../actions/LoginAction.js";
import loginModalAction from '../actions/LoginModalAction.js';

class Login extends Component {
    constructor(props){
        super(props);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    // gets the value from the login form inputs really well
    handleLoginSubmit(event){
        event.preventDefault();
        var username = event.target[0].value;
        var password = event.target[1].value;
        this.props.loginAction({
            username: username,
            password: password
        });
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        var loginMessage = this.props.login.msg;
        if (loginMessage === 'loginSuccess') {
            this.props.getModal(false);
        }
    }



    render(){
        return(
            <Form horizontal onSubmit={this.handleLoginSubmit}>
                <FormGroup controlId="formHorizontalName">

                    <Col smOffset={2} sm={8}>
                        <FormControl className="login-username-input" type="text" placeholder="Username"/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">

                    <Col smOffset={2} sm={8}>
                        <FormControl className="login-password-input"type="password" placeholder="Password"/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={8}>
                        <Button className="login-button" bsStyle="success" bsSize="small" type="submit">
                            Login
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

// function mapStateToProps(state){
//     return{
//
//     }
// }

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        loginAction: LoginAction,
        getModal: loginModalAction
    },dispatch)
}

function mapStateToProps(state){
  return {
      login: state.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
