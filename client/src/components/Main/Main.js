import React from 'react';
import './Main.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (
            <Router>
                <main>
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
                </main>
            </Router>
        )
    }
}

export default Main;