import React from 'react';
import './Main.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Create from '../CreateBracket/Create';
import LoginModal from '../Login/LoginModal';
import SignupModal from '../Signup/SignupModal';
import About from '../About/About';


class Main extends React.Component {
    render() {
        return (
            <Router>
                <main>

                    {/* RESPONSIVE NAV BAR */}

                    <ul className="side-nav" id="mobile-demo">
                        <li><Link to="/about">About</Link></li>
                        <li><a className="modal-trigger" href="#sign-up">Sign Up</a></li>
                        <li><a className="modal-trigger" href="#log-in">Log in</a></li>
                    </ul>

                    {/* MAIN SECTION */}

                    <div>
                        <div id="main-sec" className="section z-depth-5">
                            <div className="row">
                                <h2>Organize and run tournaments</h2>
                                <p>Create brackets for your favorite sports and events!</p>

                                <h4>testing routes here:</h4>
                                <ul id="main-list">
                                    <li><Link to="/about" className=" black-text waves-effect waves-light btn grey lighten-1">About</Link></li>
                                    <li><Link to="/login" className=" black-text waves-effect waves-light btn grey lighten-1">Log In</Link></li>
                                    <li><Link to="/signup" className=" black-text waves-effect waves-light btn modal-trigger grey lighten-1" href="#sign-up">Sign up</Link></li>
                                    <li><Link to="/create" className=" waves-effect waves-light btn pink darken-4">Create Bracket</Link></li>
                                </ul>
                            </div>
                            <About />
                            <Create />
                        </div>
                    </div>
                    <SignupModal />
                    <LoginModal />

                </main>
            </Router>
        )
    }
}

export default Main;