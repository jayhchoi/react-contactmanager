import React, { Component } from "react";

import contactsAPI from "../../apis/contacts";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: ""
  };

  onFormSubmit = async (e, dispatch) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    if (name === "" || email === "" || phone === "") {
      this.setState({ error: "All fields are required" });
      setTimeout(() => {
        this.setState({ error: "" });
      }, 3000);
    } else {
      const response = await contactsAPI.post("", { name, email, phone });

      if (response.status === 201) {
        dispatch({ type: "CREATE_CONTACT", payload: response.data });

        // Redirect
        this.props.history.push("/");
      }
    }
  };

  onInputChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, error } = this.state;

    return (
      <Consumer>
        {state => {
          const { dispatch } = state;

          return (
            <div className="card mb-3">
              <div className="card-header">
                <h1 className="display-4 mb-2">
                  <span className="text-danger">Add</span> Contact
                </h1>
              </div>
              <div className="card-body">
                <form onSubmit={e => this.onFormSubmit(e, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onInputChange}
                    error={error}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onInputChange}
                    error={error}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onInputChange}
                    error={error}
                  />
                  {error === "" ? null : (
                    <div class="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-secondary"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
