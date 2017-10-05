import React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <main>
                <div className="container">
                    <div id="about-sec" className="section about z-depth-5">
                        <h1>Using the bracket generator:</h1>
                        <ol>
                            <li>Name the Bracket</li>
                            <li>Select Bracket Type: (Single Elimination)</li>
                            <li>Enter the number of Entrants</li>
                        </ol>
                    </div>
                </div>
            </main>
        )
    }
}

export default About;