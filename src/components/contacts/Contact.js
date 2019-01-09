import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Consumer } from "../../context";
import contactsAPI from "../../apis/contacts";

class Contact extends Component {
  state = {
    showContact: false
  };

  onToggleClick = () => {
    this.setState({ showContact: !this.state.showContact });
  };

  // This is like a action creator
  onDeleteClick = async (id, dispatch) => {
    const response = await contactsAPI.delete(`/${id}`);
    if (response.status === 200) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContact } = this.state;

    return (
      <Consumer>
        {state => {
          const { dispatch } = state;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={this.onToggleClick}
                  className="fas fa-sort-down ml-2"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times float-right"
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => this.onDeleteClick(id, dispatch)}
                />
                <Link to={`/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt fa-sm float-right mr-3"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </h4>
              {showContact ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
