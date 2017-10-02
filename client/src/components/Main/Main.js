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
                        <a className="waves-effect waves-light btn brown lighten-2">Sign up</a>
                        <a className="waves-effect waves-light btn brown lighten-2">About</a>
                        <a className="waves-effect waves-light btn teal lighten-1">Create Bracket</a>
                    </div>
                </div>
            </main>
            </Router>
        )
    }
}

export default Main;