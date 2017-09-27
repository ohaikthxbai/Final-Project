import React from 'react';
import './style.css'

class Navbar extends React.Component {
  render() {
    return(
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Final Project Name</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
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