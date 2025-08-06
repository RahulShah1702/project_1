import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Intern',
    motivation: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/applicants`, formData);
      setMessage('Application submitted successfully!');
      setFormData({ name: '', email: '', role: 'Intern', motivation: '' });
    } catch (error) {
      setMessage('Error submitting application. Please try again.');
    }
  };

  return (
    <div className="container form-container">
      <h1>Intern/Volunteer Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="Intern">Intern</option>
            <option value="Volunteer">Volunteer</option>
          </select>
        </div>
        <div className="form-group">
          <label>Why do you want to join?</label>
          <textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
}

export default Register;