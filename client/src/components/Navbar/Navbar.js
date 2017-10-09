import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div className="navbar-fixed">
          <nav className="transparent z-depth-0">
            <div className="nav-wrapper">
              <a className="brand-logo" href="" ><img src="../../public/img/bringit-logo-pink.png" alt="logo" /></a>
              <a href="" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/about">About</Link></li>
                <li><a className="modal-trigger" href="#sign-up">Sign Up</a></li>
                <li><a className="btn pink darken-4 pulse modal-trigger" href="#log-in"><strong>Log in</strong></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </Router>
    )
  }
}

export default Navbar;