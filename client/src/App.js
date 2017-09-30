import React, { Component } from 'react';
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
