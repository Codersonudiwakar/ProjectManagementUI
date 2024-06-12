// src/RegistrationForm.js

import React, { useState } from 'react';

const RegistrationForm = ({ closeModal }) => {
    const [formData, setFormData] = useState({
        summary: '',
        description: '',
        issueType: 'Task',
      });
      const [submittedData, setSubmittedData] = useState(null);
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        closeModal();
      };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <h2>Create Jira Ticket</h2>
      <label>
        Summary:
        <input
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Issue Type:
        <select
          name="issueType"
          value={formData.issueType}
          onChange={handleChange}
          required
        >
          <option value="Task">Task</option>
          <option value="Bug">Bug</option>
          <option value="Story">Story</option>
        </select>
      </label>
      <button type="submit">Create Ticket</button>
    </form>
    {submittedData && (
      <div className="submitted-data">
        <h3>Submitted Data:</h3>
        <p><strong>Summary:</strong> {submittedData.summary}</p>
        <p><strong>Description:</strong> {submittedData.description}</p>
        <p><strong>Issue Type:</strong> {submittedData.issueType}</p>
      </div>
    )}
  </div>

  );
};

export default RegistrationForm;
