import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Login from './components/Login/Login';
import './components/Navbar/Navbar.css';



class App extends Component {
  render() {
    return (
      <Router>
        <body>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to="/about">About</Link></li>
            <li><a className="modal-trigger" href="#sign-up">Sign up</a></li>
            <li><a className="modal-trigger" href="#log-in">Log in</a></li>
          </ul>

          {/* MODAL DIVS HERE */}

          {/* SIGN UP */}
          <div id="sign-up" className="modal modal-fixed-footer">
            <div className="modal-content">
              <h3>Sign Up</h3>
              <div className="row">
                <form className="center-align">
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="user_name" type="text" className="validate"></input>
                      <label for="user_name">User Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="email" type="text" className="validate"></input>
                      <label for="email">Email Address</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="pw" type="text" className="validate"></input>
                      <label for="pw">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <input id="confirm_pw" type="text" className="validate"></input>
                      <label for="confirm_pw">Confirm Password</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="modal-footer">
              <a href="#!" className="btn modal-action modal-close waves-effect waves-green btn-flat ">Submit</a>
            </div>
          </div>

          {/* LOG IN*/}
          <div id="log-in" className="modal modal-fixed-footer">
            <div className="modal-content">
              <h3>Log in</h3>
              <div className="row">
                    <div className="input-field col s6">
                      <input id="user_name" type="text" className="validate"></input>
                      <label for="user_name">User Name</label>
                    </div>
                  </div>
              <div className="row">
                    <div className="input-field col s6">
                      <input id="pw" type="text" className="validate"></input>
                      <label for="pw">Password</label>
                    </div>
                  </div>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Submit</a>
            </div>
          </div>
          <Navbar />
          <Banner />
          <Main />
          <About />
          <Footer />
        </body>
      </Router>
    );
  }
}

export default App;
