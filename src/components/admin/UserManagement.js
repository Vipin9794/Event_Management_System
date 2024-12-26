
  


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = ({ userId }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
  });

  useEffect(() => {
    if (userId) {
      axios.get(`/api/users/${userId}`).then((response) => {
        setUserData(response.data);
      });
    }
  }, [userId]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = userId ? `/api/users/${userId}` : '/api/users';
    const method = userId ? 'put' : 'post';

    axios[method](endpoint, userData)
      .then((response) => {
        alert('User saved successfully');
      })
      .catch((error) => {
        alert('Error: ' + error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h3>{userId ? 'Update User' : 'Add User'}</h3>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Role</label>
        <input
          type="text"
          className="form-control"
          name="role"
          value={userData.role}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {userId ? 'Update' : 'Add'} User
      </button>
    </form>
  );
};

export default UserManagement;
