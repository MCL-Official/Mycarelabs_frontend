
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    howDidYouFindUs: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        howDidYouFindUs: ''
      });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 border rounded-lg bg-white shadow-md">
      <h1 className="text-4xl font-bold text-center mb-4">We'd like to hear From You</h1>
      <p className="text-lg text-center mb-2 ">
        Fill out the Contact Form below and we will contact you as soon as possible or use our toll-free number <a href="tel:+18007904550" className="text-blue-500">+1-800-790-4550</a>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-2 md:mb-0">
            <label className="block text-gray-700 text-sm ">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <label className="block text-gray-700 text-sm">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email Address*"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 ">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <label className="block text-gray-700 text-sm mb-2">How did you find Us?</label>
            <select
              name="howDidYouFindUs"
              value={formData.howDidYouFindUs}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Select</option>
              <option value="Search Engine">Search Engine</option>
              <option value="Social Media">Social Media</option>
              <option value="Word of Mouth">Word of Mouth</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm ">Message</label>
          <textarea
            name="message"
            placeholder="Write your Query here"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-200"
            rows="6"
          ></textarea>
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;