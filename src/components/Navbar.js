import React from 'react';
import './style.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Final Project Name</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="">About</a></li>
              <li><a href="">Sign up</a></li>
              <li><a href="">Log in</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="">About</a></li>
              <li><a href="">Sign up</a></li>
              <li><a href="">Log in</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;