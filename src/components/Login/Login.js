import React, { useState, useCallback } from 'react';
import styles from './Login.module.css';
import TokenService from '../../services/TokenService';
import { serverRequest } from '../../services/request';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
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
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      login();
    }
  }, [formData]);

  const login = async () => {
    try {
        const response = await serverRequest('POST', '/api/token/', false, formData);
        TokenService.setUser(response.data);
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className={styles.authContainer}>
      <h2>Login</h2>
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
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className={styles.inputStyle}
        />
        {errors.password && <div className={styles.errorMessage}>{errors.password}</div>}
        <button className={styles.buttonStyle} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
