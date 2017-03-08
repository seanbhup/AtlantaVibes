import React, {Component} from 'react';
import Register from './Register.js';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

class LandingPage extends Component {

    handleEditorChange(newValue) {
        console.log('change',newValue);
    }

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
                                <Register/>
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
                <AceEditor
                    mode="javascript"
                    theme="monokai"
                    onChange={this.handleEditorChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{
                        $blockScrolling: true
                    }}/>
            </div>
        )
    }
}

export default LandingPage
