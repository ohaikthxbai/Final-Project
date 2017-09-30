import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import About from "../About/About";


class Navbar extends React.Component {
  render() {
    return (
      <Router>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="" className="brand-logo">Final Project Name</a>
            <a href="" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/signup">Sign up</Link></li>
              <li><Link to="/login" id="login-in" className="btn pulse red accent-3">Log in</Link></li>
            </ul>
          </div>
        </nav>
        <ul className="side-nav" id="mobile-demo">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/login">Log in</Link></li>
      </ul>
      </div>
      </Router>
    )
  }
}

export default Navbar;