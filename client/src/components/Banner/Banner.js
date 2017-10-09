import React from 'react';
import './Banner.css';

class Banner extends React.Component {
    render() {
        return (
            <section>
                <div id="banner-sec" className="container">
                    <div className="white-text section"> 
                        <h1>BRING IT!</h1>
                        <h5><i>Tournament Bracket Generator</i></h5>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;