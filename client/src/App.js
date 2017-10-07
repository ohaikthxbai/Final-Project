import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Login from './components/Login/Login';
import './components/Navbar/Nav.css';
import './components/Footer/Footer.css';
import './components/Main/Main.css';
import './components/Banner/Banner.css';
import './components/About/About.css';


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

        <div id="sign-up" className="modal modal-fixed-footer">
            <div className="modal-content">
              <h4>Sign Up</h4>
              <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
            </div>
          </div>

          <div id="log-in" className="modal modal-fixed-footer">
            <div className="modal-content">
              <h4>Log in</h4>
              <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
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
