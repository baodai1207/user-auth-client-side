import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './form.css';
<<<<<<< HEAD
=======
import axios from 'axios';
>>>>>>> fdbe6ee12732c3a1d6a81099ab39a461b94613bf

export default function Form() {
  const [values, setValues] = useState({
    phoneNumber: '',
    accessCode: '',
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
<<<<<<< HEAD
    if (values.phoneNumber) {
      // setError('Please enter a phone number!');
      setValid(true);
    }
=======
    const user = {
      phoneNumber: '',
      accessCode: '',
    };
    console.log(values.phoneNumber);
    // axios
    //   .post('http://localhost:5000/api/user', user)
    //   .then(() => console.log('User Created'))
    //   .catch(err => {
    //     console.log(err);
    //   });
    // if (values.phoneNumber) {
    //   // setError('Please enter a phone number!');
    //   setValid(true);
    // }
>>>>>>> fdbe6ee12732c3a1d6a81099ab39a461b94613bf
    // NEED TO CHECK ACCESS CODE IF IT IS THE SAME WITH GENERATED CODE
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
      <form
<<<<<<< HEAD
        method='post'
        action='/users'
=======
        // method='post'
        // action='/users'
>>>>>>> fdbe6ee12732c3a1d6a81099ab39a461b94613bf
        className='register-form'
        onSubmit={handleSubmit}
      >
        {console.log(values.phoneNumber)}
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
<<<<<<< HEAD
        {submitted && values.phoneNumber ? (
=======
        {submitted &&
        values.phoneNumber.length !== 10 &&
        isNaN(values.phoneNumber) ? (
>>>>>>> fdbe6ee12732c3a1d6a81099ab39a461b94613bf
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
