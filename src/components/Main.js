import React from 'react';
import './style.css';

class Main extends React.Component {
    render() {
        return (
            <main>
                <div className="container">
                    <div className="section z-depth-5">
                            <ul>
                                <li><a className="waves-effect waves-light btn-large">Sign up</a></li>
                                <li><a className="waves-effect waves-light btn-large">About</a></li>
                                <li><a className="waves-effect waves-light btn-large">Create Bracket</a></li>
                            </ul>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;