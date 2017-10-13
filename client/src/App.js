import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import routes from './routes.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Banner />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
