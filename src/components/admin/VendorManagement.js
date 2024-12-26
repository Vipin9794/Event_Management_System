


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VendorManagement = ({ vendorId }) => {
  const [vendorData, setVendorData] = useState({
    name: '',
    description: '',
    membershipId: '',
  });

  useEffect(() => {
    if (vendorId) {
      axios.get(`/api/vendors/${vendorId}`).then((response) => {
        setVendorData(response.data);
      });
    }
  }, [vendorId]);

  const handleChange = (e) => {
    setVendorData({ ...vendorData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = vendorId ? `/api/vendors/${vendorId}` : '/api/vendors';
    const method = vendorId ? 'put' : 'post';

    axios[method](endpoint, vendorData)
      .then((response) => {
        alert('Vendor saved successfully');
      })
      .catch((error) => {
        alert('Error: ' + error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h3>{vendorId ? 'Update Vendor' : 'Add Vendor'}</h3>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={vendorData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Description</label>
        <textarea
          className="form-control"
          name="description"
          value={vendorData.description}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Membership ID</label>
        <input
          type="text"
          className="form-control"
          name="membershipId"
          value={vendorData.membershipId}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {vendorId ? 'Update' : 'Add'} Vendor
      </button>
    </form>
  );
};

export default VendorManagement;
