import React  from 'react';
import PropTypes from 'prop-types';
import SignUp from './SignUp.js';


class SignUpState extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            errors: {},
            user: {
                user_name: '',
                password: '',
                confirm_pw: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    changeUser(event) {
        const field = event.target.user_name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    processForm(event) {

        event.preventDefault();

        console.log('user_name:', this.state.user.user_name);
        console.log('password:', this.state.user.password);
        console.log('confirm_pw:', this.state.user.confirm_pw);
    }

    render() {
        return (
            <SignUp
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        );
    }

}

export default SignUpState;