import React, { Component } from "react";

import Contact from "./Contact";
import { Consumer } from "../context";
// import contactsAPI from "../apis/contacts";

class Contacts extends Component {
  renderContacts(contacts) {
    return contacts.map(contact => {
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
            <React.Fragment>{this.renderContacts(contacts)}</React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
