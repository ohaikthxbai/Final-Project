import React from 'react';
import './SignupModal.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class SignupModal extends React.Component {
    render() {
        return (
            <div id="sign-up" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h3>Sign Up</h3>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="user_name" type="text" className="validate"></input>
                                    <label for="user_name">User Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate"></input>
                                    <label for="email" data-error="wrong" data-success="right">Email Address</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="pw" type="password" className="validate"></input>
                                    <label for="pw">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="confirm_pw" type="password" className="validate"></input>
                                    <label for="confirm_pw">Confirm Password</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="modal-footer">
                    <a href="#!" className="waves-effect waves-light btn pink darken-4 modal-action modal-close">Submit</a>
                </div>
            </div>
        )
    }
}

export default SignupModal;