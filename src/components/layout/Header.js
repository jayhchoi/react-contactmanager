import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { branding } = this.props;

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {branding}
          </Link>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question" /> About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  <i className="fas fa-plus" /> Add
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
