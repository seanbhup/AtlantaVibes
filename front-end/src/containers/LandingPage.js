import React, {Component} from 'react';
import {
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    Button,
    Col
} from 'react-bootstrap';


class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="landing-wrapper">
                    <div className="greeting-register-wrapper container-fluid">
                        <div className="row">
                            <div className="greeting col-xs-6">
                                <h1 className="text-center">WELCOME TO THE FRONT LINES, SOLDIER/SLAYER OF CODE</h1>
                                <h2 className="text-center">blalbalbhalbhalbhlabhlahblhablahblabhlabhlabhabl</h2>
                                <h3 className="text-center">doubleblah</h3>
                            </div>
                            <div className="register-form col-xs-6">
                                <Form horizontal onSubmit={this.handleRegistrationSubmit}>
                                    <FormGroup controlId="formHorizontalName">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Username
                                        </Col>
                                        <Col sm={10}>
                                            <FormControl type="text" placeholder="Full Name"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalEmail">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Email
                                        </Col>
                                        <Col sm={10}>
                                            <FormControl type="email" placeholder="Email"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalPassword">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Password
                                        </Col>
                                        <Col sm={10}>
                                            <FormControl type="password" placeholder="Password"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalPassword">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Repeat Password
                                        </Col>
                                        <Col sm={10}>
                                            <FormControl type="password" placeholder="Password"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col smOffset={2} sm={10}>
                                            <Button bsStyle="danger" bsSize="small" type="submit">
                                                Register
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>

                    </div>
                    <div className="how-it-works-wrapper text-center">
                        <div className="row">
                            <div className="step-1 step col-xs-4">
                                Step 1: DO SOME STUFF
                            </div>
                            <div className="step-2 step col-xs-4">
                                Step 2: DO MORE STUFF AFTER
                            </div>
                            <div className="step-3 step col-xs-4">
                                Step 3: KILL WITH CODE.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage
