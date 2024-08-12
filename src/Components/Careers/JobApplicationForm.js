// src/components/JobApplicationForm.js

import React, { useState } from 'react';

const JobApplicationForm = ({ jobId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    coverLetter: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to the backend
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
      <h2 className="text-2xl font-bold mb-4">Apply for this Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
            Resume
          </label>
          <input
            type="file"
            name="resume"
            id="resume"
            onChange={handleFileChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
            Cover Letter
          </label>
          <textarea
            name="coverLetter"
            id="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-700 text-white px-4 py-2 rounded-md shadow hover:bg-blue-800 focus:outline-none"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
