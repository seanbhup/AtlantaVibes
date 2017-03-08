import React, {Component} from 'react';

let MyWorker = require('../worker.js');

class WorkerExample extends Component {

    componentDidMount() {
        this.worker = new MyWorker();
    }

    render() {
        this.worker.onmessage = (m) => {
            this.setState({data: m.data})
        }

        let data;
        if (this.state) {
            data = this.state.data;
        }
        return (
            <div>
                <p>
                    {data}
                    <br/>
                    <button onClick={() => this.worker.postMessage(null)}>
                        Up
                    </button>
                </p>
            </div>
        )
    }
}

export default WorkerExample;
