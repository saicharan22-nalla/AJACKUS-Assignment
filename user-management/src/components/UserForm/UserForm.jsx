import React, { useState, useEffect } from 'react';
import './UserForm.css'

const UserForm = ({ onSave, user = null, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  });

  // Populate the form when editing a user
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        department: user.department || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      alert('First Name and Email are required');
      return;
    }
    onSave(formData); // Pass the form data to the parent component
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }} className='login-box'>
      <div className="form-group">
    <label className="form-label">First Name</label>
    <input
      type="text"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      placeholder="First Name"
      className="form-input"
      required
    />
  </div>
  <div className="form-group">
    <label className="form-label">Last Name</label>
    <input
      type="text"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      placeholder="Last Name"
      className="form-input"
    />
  </div>
  <div className="form-group">
    <label className="form-label">Email</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email"
      className="form-input"
      required
    />
  </div>
  <div className="form-group">
    <label className="form-label">Department</label>
    <input
      type="text"
      name="department"
      value={formData.department}
      onChange={handleChange}
      placeholder="Department"
      className="form-input"
    />
  </div>
  <div className="form-actions">
    <button type="submit" className="btn btn-submit">
      {user ? 'Update User' : 'Add User'}
    </button>
    {onCancel && (
      <button type="button" onClick={onCancel} className="btn btn-cancel">
        Cancel
      </button>
    )}
  </div>
    </form>
  );
};

export default UserForm;
