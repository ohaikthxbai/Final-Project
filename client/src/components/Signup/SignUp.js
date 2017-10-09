import React  from 'react';
import PropTypes from 'prop-types';

const SignUp = ({
    onSubmit, onChange, errors, user
}) => (
        <div id="sign-up" className="modal modal-fixed-footer">
            <div className="modal-content">
                <h3>Sign Up</h3>
                <div className="row">
                    <form className="col s12" action="/" onSubmit={onSubmit}>
                        {errors.summary && <p className="error-msg">errors.summary}</p>}
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="user_name" type="text" className="validate" errorText={errors.user_name} onChange={onChange} value={user.user_name}></input>
                                <label for="user_name">User Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" errorText={errors.email} onChange={onChange} value={user.email}></input>
                                <label for="email" data-error="wrong" data-success="right">Email Address</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" errorText={errors.password} onChange={onChange} value={user.password}></input>
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="confirm_pw" type="password" className="validate" errorText={errors.confirm_pw} onChange={onChange} value={user.confirm_pw}></input>
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
    );

SignUp.PropTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignUp;