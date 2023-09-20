import React, { useState, useCallback } from 'react';
import styles from './Signup.module.css';
import { serverRequest } from '../../services/request';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  }, [formData]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { email, password } = formData;
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    else if (password.length < 8 ){
      newErrors.password = 'Password should be at least 8 characters';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      signup();
    }
  }, [formData]);

  const signup = async () => {
    try {
        const response = await serverRequest('POST', '/api/signup/', false, formData);
        console.log('success', response)
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className={styles.authContainer}>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit} className={styles.authContainer}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className={styles.inputStyle}
        />
        {errors.email && <div className={styles.errorMessage}>{errors.email}</div>}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          className={styles.inputStyle}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          className={styles.inputStyle}
        />
         <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className={styles.inputStyle}
        />
        {errors.password && <div className={styles.errorMessage}>{errors.password}</div>}
        <button className={styles.buttonStyle} type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
