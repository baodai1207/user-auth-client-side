import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './form.css';

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
    if (values.phoneNumber) {
      // setError('Please enter a phone number!');
      setValid(true);
    }
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
        method='post'
        action='/users'
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
        {submitted && values.phoneNumber ? (
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
