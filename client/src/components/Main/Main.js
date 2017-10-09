import React from 'react';
import './Main.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Create from '../CreateBracket/Create';
import LoginModal from '../Login/LoginModal';
import SignupModal from '../Signup/SignupModal';


class Main extends React.Component {
    render() {
        return (
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
                            <ul>
                                <li className="main-btns"><a className="black-text waves-effect waves-light btn grey lighten-1">About</a></li>
                                <li className="main-btns"><a className="black-text waves-effect waves-light btn modal-trigger grey lighten-1" href="#sign-up">Sign up</a></li>
                                <li className="main-btns"><a className="waves-effect waves-light btn pink darken-4">Create Bracket</a></li>
                            </ul>
                        </div>
                        <div className="row">
                            <h1>Using the bracket generator:</h1>
                            <ol>
                                <li>Name the Bracket</li>
                                <li>Select Bracket Type: (Single Elimination)</li>
                                <li>Enter the number of Entrants</li>
                            </ol>
                        </div>
                        <Create />
                    </div>
                </div>
                <SignupModal />
                <LoginModal />

            </main>
        )
    }
}

export default Main;