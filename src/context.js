import React, { Component } from "react";

import contactsAPI from "./apis/contacts";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    // This is important! Review!
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount = async () => {
    const response = await contactsAPI.get("");

    this.setState({ contacts: response.data });
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
