import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './form.css';
import axios from 'axios';

export default function Form() {
  const [values, setValues] = useState({
    phoneNumber: '',
    accessCode: '',
    // showAccessCode: false,
  });

  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handlePhoneNumberInputChange(e) {
    setValues({ ...values, phoneNumber: e.target.value });
  }
  function handleAccessCodeInputChange(e) {
    setValues({ ...values, accessCode: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      phoneNumber: '',
      accessCode: '',
      // showAccessCode: true,
    };
    // console.log(values.phoneNumber);
    // if (values.phoneNumber !== 10 && isNaN(values.phoneNumber)) {
    //   setError('Please enter a phone number!');
    // }
    axios
      .post('http://localhost:5000/api/users/create', user)
      .then(() => console.log('User Created'))
      .catch(err => {
        console.log(err);
      });
    setSubmitted(true);
  }
  return (
    <div className='form-container'>
      {error && <Alert variant='danger'>{error}</Alert>}
      {submitted && valid ? (
        <div className='success-message'>
          Success! Thank you for registering
        </div>
      ) : null}
      <form className='register-form' onSubmit={handleSubmit}>
        {/* {console.log(values.phoneNumber)} */}
        <input
          onChange={handlePhoneNumberInputChange}
          value={values.phoneNumber}
          id='phone-number'
          className='form-field'
          // type='text'
          placeholder='Phone Number'
          name='phoneNumber'
          required
        />
        {submitted &&
        values.phoneNumber.length !== 10 &&
        isNaN(values.phoneNumber) ? (
          <span id='phone-number-error'>Please enter a phone number</span>
        ) : null}

        <input
          onChange={handleAccessCodeInputChange}
          value={values.accessCode}
          id='access-code'
          className='form-field'
          // type='text'
          placeholder='Access Code'
          name='accessCode'
        />
        <button disabled={loading} className='form-field' type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  );
}
