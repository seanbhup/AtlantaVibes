import React, { Component } from 'react';
import Navbar1 from "../containers/Navbar.js";

class App extends Component {
  render() {
    return (
      <div className='container-fluid kill-padding-margin'>
          <Navbar1 />
          {this.props.children}
      </div>
    );
  }
}

export default App;



// change this after deploying to target headphone icon 
// _react2['default'].createElement('span', { className: 'glyphicon glyphicon-headphones' })