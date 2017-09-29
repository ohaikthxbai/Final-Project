import React from 'react';
import './style.css';

class Main extends React.Component {
    render() {
        return (
            <main>
                <div className="container">
                    <div id="main-sec" className="section z-depth-5">
                        <a className="waves-effect waves-light btn-large brown lighten-2">Sign up</a>
                        <a className="waves-effect waves-light btn-large brown lighten-2">About</a>
                        <a className="waves-effect waves-light btn-large teal lighten-1">Create Bracket</a>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;