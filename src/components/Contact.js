import React, { Component } from "react";

class Contact extends Component {
  state = {
    showContact: false
  };

  onToggleClick = () => {
    this.setState({ showContact: !this.state.showContact });
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler(this.props.contact.id);
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContact } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={this.onToggleClick}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times float-right"
            style={{ cursor: "pointer", color: "red" }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {showContact ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
