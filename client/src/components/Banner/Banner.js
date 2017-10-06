import React from 'react';
import './Banner.css';

class Banner extends React.Component {
    render() {
        return (
            <main>
                <div className="container">
                    <div className="section">
                        <h1>BRING IT!</h1>
                        <h5><i>Tournament Bracket Generator</i></h5>
                    </div>
                </div>
            </main>
        )
    }
}

export default Banner;