import React, { useState } from 'react';
import axios from 'axios';
import { LOG_API_END_POINT } from '../../utils/Constrient';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOG_API_END_POINT, formData);
      setMessage(response.data.message); // Show success message
      setToken(response.data.token); // Store JWT token
      localStorage.setItem('token', response.data.token); // Save token in localStorage
    } catch (error) {
      setMessage(error.response.data.message); // Show error message
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login User</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {token && <div className="mt-3">JWT Token: {token}</div>}
    </div>
  );
};

export default Login;
