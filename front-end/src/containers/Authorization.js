import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import registerModalAction from '../actions/RegisterModalAction';
import loginModalAction from '../actions/LoginModalAction';
import logoutAction from '../actions/LogoutAction';

class Authorization extends Component {
    constructor(props){
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick(){
        this.props.getLoginModal({
            showModal: true
        })
    }

    handleRegisterClick(){
        this.props.getRegisterModal({
            showModal: true
        })
    }

    handleLogoutClick() {
        // this.props.loginInfo.isLoggedIn = false;
        this.props.logout({isLoggedIn: false});
    }

    render() {
        if (this.props.loginInfo !== null) {
            if (this.props.loginInfo.isLoggedIn) {
                return (
                    <Nav pullRight>
                        <NavItem>Welcome, {this.props.loginInfo.name}</NavItem>
                        <NavItem onClick={this.handleLogoutClick} href="#">Logout</NavItem>
                    </Nav>
                )
            } else {
                return(
                    <Nav pullRight>
                        <NavItem onClick={this.handleLoginClick} href="#">Login</NavItem>
                        <NavItem onClick={this.handleRegisterClick} href="#">Register</NavItem>
                    </Nav>
                )
            }
        } else {
            return(
                <Nav pullRight>
                    <NavItem onClick={this.handleLoginClick} href="#">Login</NavItem>
                    <NavItem onClick={this.handleRegisterClick} href="#">Register</NavItem>
                </Nav>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        loginInfo: state.login
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getLoginModal: loginModalAction,
        getRegisterModal: registerModalAction,
        logout: logoutAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
