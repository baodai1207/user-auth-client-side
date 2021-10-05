import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          {this.state.phoneNumber < 10 ? (
            <Alert variant='danger'> Please enter 10 digits number </Alert>
          ) : null}
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

          <input
            onChange={this.onChangeAccessCode}
            value={this.state.accessCode}
            id='phone-number'
            className='form-field'
            // type='text'
            placeholder='Access Code'
            name='accessCode'
          />
          <button className='form-field' type='submit'>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
