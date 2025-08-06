import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [applicants, setApplicants] = useState([]);

  const fetchApplicants = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://volunteer-app-aoe8.onrender.com/api/applicants', {
      headers: { Authorization: `Bearer ${token}` }
  });
      setApplicants(response.data);
    } catch (err) {
      console.error('Error fetching applicants:', err);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  const handleAccept = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`http://localhost:5000/api/applicants/accept/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      await fetchApplicants(); // Re-fetch to sync with backend
      alert(response.data.message);
    } catch (err) {
      console.error('Error accepting applicant:', err.response?.data?.message || err.message);
      alert(err.response?.data?.message || 'Error accepting applicant');
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`http://localhost:5000/api/applicants/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      await fetchApplicants(); // Re-fetch to sync with backend
      alert(response.data.message);
    } catch (err) {
      console.error('Error deleting applicant:', err.response?.data?.message || err.message);
      alert(err.response?.data?.message || 'Error deleting applicant');
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Motivation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map(applicant => (
            <tr key={applicant._id}>
              <td>{applicant.name}</td>
              <td>{applicant.email}</td>
              <td>{applicant.role}</td>
              <td>{applicant.motivation}</td>
              <td>
                <button
                  onClick={() => handleAccept(applicant._id)}
                  style={{
                    backgroundColor: applicant.accepted ? '#4CAF50' : '#f44336',
                    color: 'white',
                    padding: '5px 10px',
                    border: 'none',
                    cursor: applicant.accepted ? 'default' : 'pointer'
                  }}
                  disabled={applicant.accepted}
                >
                  {applicant.accepted ? 'Accepted' : 'Accept'}
                </button>
                <button
                  onClick={() => handleDelete(applicant._id)}
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '5px 10px',
                    border: 'none',
                    cursor: 'pointer',
                    marginLeft: '10px'
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;