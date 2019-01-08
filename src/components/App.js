import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Contacts from "./Contacts";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
