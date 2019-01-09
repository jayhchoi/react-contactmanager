import React, { Component } from "react";
import _ from "lodash";

import Contact from "./Contact";
import { Consumer } from "../../context";
// import contactsAPI from "../apis/contacts";

class Contacts extends Component {
  renderContacts(contacts) {
    return _.sortBy(contacts, ["id"])
      .reverse()
      .map(contact => {
        return <Contact key={contact.id} contact={contact} />;
      });
  }

  render() {
    return (
      <Consumer>
        {state => {
          const { contacts } = state;

          if (contacts.length === 0) {
            return <React.Fragment>Loading...</React.Fragment>;
          }

          return (
            <React.Fragment>
              <h1 className="display-4 mb-4">
                <span className="text-danger">Contact</span> List
              </h1>
              {this.renderContacts(contacts)}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
