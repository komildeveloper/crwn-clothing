import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in'>
        <h2>I have already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={email}
            required
            label='Email'
            handleChange={this.handleChange}
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            required
            label='Password'
            handleChange={this.handleChange}
          />
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign In with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
