import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
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
          <li><Link to="/signup">Sign up</Link></li>
          <li><Link to="/login">Log in</Link></li>
        </ul>
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
