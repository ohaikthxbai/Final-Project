import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import './components/Navbar/Navbar.css';


class App extends Component {
  render() {
    return (
      <Router>
        <body>
          <Navbar />
          <Banner />
          <Main />
          <Footer />
        </body>
      </Router>
    );
  }
}

export default App;
