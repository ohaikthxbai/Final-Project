import React from 'react';
import './LoginModal.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class LoginModal extends React.Component {
    render() {
        return (
            <div id="log-in" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h3>Log In</h3>
                    <form>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="user_name" type="text" className="validate"></input>
                                <label for="user_name">User Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="pw" type="text" className="validate"></input>
                                <label for="pw">Password</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect waves-light btn pink darken-4">Submit</a>
                </div>
            </div>
        )
    }
}

export default LoginModal; 