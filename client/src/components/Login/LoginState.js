import React  from 'react';
import PropTypes from 'prop-types';
import Login from './Login.js';


class LoginState extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        user_name: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }


  processForm(event) {

    event.preventDefault();

    console.log('user_name:', this.state.user.user_name);
    console.log('password:', this.state.user.password);
  }


  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <Login
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginState;