import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="footer-copyright">
                    <div className="white-text container">
                        © 2017 - ohaikthxbai
              <a className="white-text right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;