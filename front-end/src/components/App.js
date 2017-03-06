import React, { Component } from 'react';
import LandingPage from "../containers/LandingPage.js";
import Navbar1 from "../containers/Navbar.js";

class App extends Component {
  render() {
    return (
      <div>
          <Navbar1 />
          <LandingPage />
      </div>
    );
  }
}

export default App;
