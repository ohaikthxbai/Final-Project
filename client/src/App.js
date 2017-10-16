import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import routes from './routes.js';
// import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import './components/Nav/Nav.css';
import logo from './images/logo/bringit-logo-pink-invert.svg'

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (

      //   <Router>
      //   <div className="navbar-fixed">
      //     <nav className="transparent z-depth-0">
      //       <div className="nav-wrapper">
      //         <Link to='/' className="brand-logo" href="" ><img src={logo} alt="logo" /></Link>
      //         <a href="" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      //         <ul className="right hide-on-med-and-down">
      //           <li><Link to="/about">About</Link></li>
      //           <li><a className="modal-trigger" href="#sign-up">Sign Up</a></li>
      //           <li><a className="btn pink darken-4 pulse modal-trigger" href="#log-in"><strong>Log in</strong></a></li>
      //         </ul>
      //       </div>
      //     </nav>
      //   </div>
      // </Router>


    <div>
      <div className="navbar-fixed">
        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <Link to='/' className="brand-logo" href="" ><img src={logo} alt="logo" /></Link>
            <a href="" data-activates={"mobile-demo"} className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li
                onClick={this.goTo.bind(this, 'home')}
              >
                Home
            </li>
              {
                !isAuthenticated() && (
                  <li
                    bsStyle="primary"
                    className="btn pink darken-4 pulse modal-trigger"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </li>
                )
              }
                          {
              isAuthenticated() && (
                  <li
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Bracket
                  </li>
                )
            }
              {
                isAuthenticated() && (
                  <li
                    bsStyle=""
                    className="btn pink darken-4 modal-trigger"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </li>
                )
              }
            </ul>
          </div>
        </nav>
        </div>
        <Router>
          <div>
            <Banner />
            <Main />
            <Footer />
          </div>
        </Router>
    </div>

        );
  }
}


// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Navbar />
//           <Banner />
//           <Main />
//           <Footer />
//         </div>
//       </Router>
//     );
//   }
// }

export default App;
