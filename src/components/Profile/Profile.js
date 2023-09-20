import React, { useState, useCallback, useEffect } from 'react';
import styles from './Profile.module.css';
import { serverRequest } from '../../services/request';

const Profile = () => {
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: ''
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, [formData]);

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    try {
        const response = await serverRequest('GET', '/api/update-profile/', true);
        const updateFormData = {
            email: response.data.email || '',
            first_name: response.data.first_name || '',
            last_name: response.data.last_name || ''
        }
      setFormData(updateFormData);
    } catch (error) {
        console.log(error);
    }
  }

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
        const response = await serverRequest('PUT', '/api/update-profile/', true, formData);
        console.log('success', response)
    } catch (error) {
        console.log(error);
    }
  }, [formData]);

  return (
    <div className={styles.authContainer}>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit} className={styles.authContainer}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className={styles.inputStyle}
          readOnly
        />
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleInputChange}
          className={styles.inputStyle}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleInputChange}
          className={styles.inputStyle}
        />
        <button className={styles.buttonStyle} type="submit">Update</button>
      </form>
    </div>
  );
};

export default Profile;
