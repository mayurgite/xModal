import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    if (!username) {
      alert('Please fill out all fields');
      return;
    }
    if (!email.includes('@')) {
      alert('Invalid email.');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert('Invalid phone number.');
      return;
    }
    const today = new Date();
    const inputDate = new Date(dob);
    if (inputDate > today) {
      alert('Invalid date of birth.');
      return;
    }
    // If all validations pass, you can submit the form or perform any other actions here
    // For this example, I'll just close the modal
    setIsOpen(false);
    setUsername('');
    setEmail('');
    setPhone('');
    setDob('');
    setErrorMessage('');
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button className="open-form-button" onClick={handleOpenModal}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form>
              <h2>Fill Details</h2>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />

              <button type="button" className="submit-button" onClick={handleSubmit}>Submit</button>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
