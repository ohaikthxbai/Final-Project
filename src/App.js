import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import './components/style.css';

class App extends Component {
  render() {
    return (
      <body>
      <Navbar />
      <Main />
      <Footer />
      </body>
    );
  }
}

export default App;
