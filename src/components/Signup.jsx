import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Message } from 'semantic-ui-react';

import './signup.css';
import axios from 'axios';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeAccessCode = this.onChangeAccessCode.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      phoneNumber: '',
      accessCode: '',
      formError: false,
    };
  }

  onChangePhoneNumber(e) {
    this.setState({ phoneNumber: e.target.value });
  }

  onChangeAccessCode(e) {
    this.setState({ accessCode: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.phoneNumber);
    console.log(this.state.accessCode);
    const userObject = {
      phoneNumber: this.state.phoneNumber,
      accessCode: this.state.accessCode,
    };
    //Check if access code empty
    if (this.state.accessCode.length > 0) {
      axios
        .post('/api/users', userObject)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
      this.setState({ phoneNumber: '', accessCode: '' });
      //Check if access code empty
    } else if (this.state.accessCode.length === 0) {
      axios
        .post('/api/create', userObject)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
      this.setState({ phoneNumber: '' });
    }
  }

  render() {
    return (
      <div className='form-container'>
        <form className='register-form' onSubmit={this.onSubmit}>
          <input
            onChange={this.onChangePhoneNumber}
            value={this.state.phoneNumber}
            id='phone-number'
            className='form-field'
            // type='text'
            placeholder='Phone Number'
            name='phoneNumber'
            required
          />
          {this.state.phoneNumber.length < 10 ? (
            <Alert variant='primary'>
              {' '}
              Please enter 10 digits phone number to sign up{' '}
            </Alert>
          ) : (
            <Alert variant='success'>
              Great! Please press Sign Up if you need an access code!
            </Alert>
          )}

          <input
            onChange={this.onChangeAccessCode}
            value={this.state.accessCode}
            id='phone-number'
            className='form-field'
            // type='text'
            placeholder='Access Code'
            name='accessCode'
          />
          <Alert variant='primary'>
            Enter your access code here if you have it!
          </Alert>
          <button className='form-field' type='submit' disabled={false}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
