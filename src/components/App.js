import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "../context";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/Header";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contacts from "./contacts/Contacts";
import AddContact from "./contacts/AddContact";
import EditContact from "./contacts/EditContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="app">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route path="/" exact component={Contacts} />
                <Route path="/about" exact component={About} />
                <Route path="/create" exact component={AddContact} />
                <Route path="/edit/:id" exact component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
