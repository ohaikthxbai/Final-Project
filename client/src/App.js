import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Banner from './components/Banner';
import About from './components/About';
import './components/style.css';

class App extends Component {
  render() {
    return (
      <body>
        <Navbar />
        <Banner />
        <Main />
        <About />
        <Footer />
      </body>
    );
  }
}

export default App;
