import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//import About from "../About/About";


class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo" href="" >BRING IT</a>
              <a href="" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/about">About</Link></li>
                <li><a className="modal-trigger" href="#sign-up">Sign Up</a></li>
                <li><a className="btn pulse red accent-3 modal-trigger" href="#log-in">Log in</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </Router>
    )
  }
}

export default Navbar;