import React, { useState } from 'react';

function XModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    dob: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    if (!formData.username) {
      errors.username = 'Please enter a username';
    }
    if (!formData.email || !formData.email.includes('@')) {
      errors.email = 'Invalid email. Please check your email address.';
    }
    if (!formData.dob || new Date(formData.dob) > new Date()) {
      alert('Invalid date of birth. Please enter a valid date.');
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.')  ;
    }

    if (Object.keys(errors).length === 0) {
      setIsOpen(false);
      setFormData({
        username: '',
        email: '',
        dob: '',
        phone: ''
      });
      setErrors({
        username: '',
        email: '',
        dob: '',
        phone: ''
      });
      alert('Form submitted successfully!');
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="modal">
    <h1>User Details Modal</h1>
      <button onClick={() => setIsOpen(true)}>Open Form</button>
      {isOpen && (
        <div className="modal-content">
          <h2>Fill Details</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />
            {errors.username && <p>{errors.username}</p>}

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
            {errors.email && <p>{errors.email}</p>}

            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} />
            {errors.dob && <p>{errors.dob}</p>}

            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
            {errors.phone && <p>{errors.phone}</p>}

            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default XModal;
