import React from 'react';
import './Main.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

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

                <div className="container">
                    <div id="main-sec" className="section z-depth-5">
                        <div>
                            <h2>Organize and run tournaments</h2>
                            <p>Create brackets for your favorite sports and events!</p>
                        </div>
                        <ul>
                            <li className="main-btns"><a className="waves-effect waves-light btn brown lighten-2">About</a></li>
                            <li className="main-btns"><a className="waves-effect waves-light btn brown lighten-2 modal-trigger" href="#sign-up">Sign up</a></li>
                            <li className="main-btns"><a className="waves-effect waves-light btn teal lighten-1">Create Bracket</a></li>
                        </ul>
                    </div>
                </div>

                {/* MODAL DIVS HERE */}

                {/* SIGN UP */}
                <div id="sign-up" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h3>Sign Up</h3>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="user_name" type="text" className="validate"></input>
                                        <label for="user_name">User Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="email" type="email" className="validate"></input>
                                        <label for="email" data-error="wrong" data-success="right">Email Address</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="pw" type="text" className="validate"></input>
                                        <label for="pw">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="confirm_pw" type="text" className="validate"></input>
                                        <label for="confirm_pw">Confirm Password</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <a href="#!" className="btn modal-action modal-close waves-effect waves-green btn-flat ">Submit</a>
                    </div>
                </div>

                {/* LOG IN*/}
                <div id="log-in" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h3>Log in</h3>
                        <form>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="user_name" type="text" className="validate"></input>
                                    <label for="user_name">User Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="pw" type="text" className="validate"></input>
                                    <label for="pw">Password</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Submit</a>
                    </div>
                </div>

            </main>
        )
    }
}

export default Main;