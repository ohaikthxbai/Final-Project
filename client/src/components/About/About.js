import React from 'react';
import './About.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class About extends React.Component {
    render() {
        return (
            <div id="about-sec" className="row">
                <h1>Using the bracket generator:</h1>
                <ol>
                    <li>Name the Bracket</li>
                    <li>Select Bracket Type: (Single Elimination)</li>
                    <li>Enter the number of Entrants</li>
                </ol>
            </div>
        )
    }
}

export default About;