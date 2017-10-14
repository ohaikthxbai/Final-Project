import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Create from '../CreateBracket/Create';
import LoginModal from '../Login/LoginModal';
import SignupModal from '../Signup/SignupModal';
import About from '../About/About';


class Mobile extends React.Component {
    render() {
        return (
            
                    <ul className="side-nav" id="mobile-demo">
                        <li><Link to="/about">About</Link></li>
                        <li><a className="modal-trigger" href="#sign-up">Sign Up</a></li>
                        <li><a className="modal-trigger" href="#log-in">Log in</a></li>
                    </ul>
                    
        )
    }
}

export default Mobile;