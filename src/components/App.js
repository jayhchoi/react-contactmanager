import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Contacts from "./Contacts";
import { Provider } from "../context";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header branding="Contact Manager" />
        <div className="container">
          <Provider>
            <Contacts />
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
