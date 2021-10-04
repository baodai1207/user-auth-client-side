import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
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
    const userObject = {
      phoneNumber: this.state.phoneNumber,
      accessCode: this.state.accessCode,
    };

    // axios
    //   .post('http://localhost:5000/users/create', userObject)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    this.setState({ phoneNumber: '', accessCode: '' });
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
          <button className='form-field' type='submit'>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
