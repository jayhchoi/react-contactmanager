import React, { Component } from "react";

import Contact from "./Contact";
import contactsAPI from "../apis/contacts";

class Contacts extends Component {
  state = { contacts: [] };

  componentDidMount = async () => {
    const response = await contactsAPI.get("");

    this.setState({ contacts: response.data });
  };

  renderContacts(contacts) {
    return contacts.map(contact => {
      return (
        <Contact
          key={contact.id}
          contact={contact}
          deleteClickHandler={this.deleteClickHandler}
        />
      );
    });
  }

  deleteClickHandler = async id => {
    const response = await contactsAPI.delete(`/${id}`);
    if (response.status === 200) {
      const newContacts = this.state.contacts.filter(
        contact => contact.id !== id
      );

      this.setState({ contacts: newContacts });
    }
  };

  render() {
    const { contacts } = this.state;

    if (contacts.length === 0) {
      return <React.Fragment>Loading...</React.Fragment>;
    }

    return <React.Fragment>{this.renderContacts(contacts)}</React.Fragment>;
  }
}

export default Contacts;
