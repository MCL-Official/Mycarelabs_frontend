import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import axios from 'axios';

export const SlideInAuth = () => {
  return (
    <section className="grid min-h-screen grid-cols-1 bg-slate-50 md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px]">
      <Form />
      <SupplementalContent />
    </section>
  );
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    agreeToTerms: false, // New state for the checkbox
  });
  const [notification, setNotification] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value, // Handle checkbox change
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend.mycaretrading.com/portal/admin/api/registerform', formData);
      setNotification({ type: 'success', message: 'Contact form details sent successfully!' });
      setFormData({ name: '', email: '', phone: '', company: '', message: '', agreeToTerms: false });
    } catch (error) {
      setNotification({ type: 'error', message: 'Failed to send contact form details. Please try again.' });
    }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      viewport={{ once: true }}
      className="flex items-center justify-center pb-4 pt-20 md:py-20"
    >
      <div className="mx-auto my-auto max-w-lg px-4 md:pr-0">
        <motion.h1
          variants={primaryVariants}
          className="mb-2 text-center text-4xl font-semibold"
        >
          Contact Form
        </motion.h1>
        <motion.p variants={primaryVariants} className="mb-8 text-center">
          Fill out the Contact Form below and we will contact you as soon as possible or use our toll-free number 
        </motion.p>

        <form onSubmit={handleSubmit} className="w-full">
          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="name-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Name<span className="text-red-600">*</span>
            </label>
            <input
              id="name-input"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-blue-600"
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label
              htmlFor="email-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Email<span className="text-red-600">*</span>
            </label>
            <input
              id="email-input"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-blue-600"
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-4 w-full">
            <label
              htmlFor="phone-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Phone<span className="text-red-600">*</span>
            </label>
            <input
              id="phone-input"
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-blue-600"
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-4 w-full">
            <label
              htmlFor="company-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Company
            </label>
            <input
              id="company-input"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Enter your company"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-blue-600"
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-4 w-full">
            <label
              htmlFor="message-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message-input"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-blue-600"
              required
            ></textarea>
          </motion.div>

          {/* Informational content above checkbox */}
          <motion.p variants={primaryVariants} className="mb-4 text-sm text-gray-700 text-left">
            By checking this box, I consent to receive messages from My Care Labs regarding my test results, 
            appointment reminders, and other related information. I understand that these messages may be sent via 
            email, SMS, or phone call.
          </motion.p>

          {/* Checkbox input */}
          <motion.div variants={primaryVariants} className="mb-4 w-full">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <span className="ml-2 text-sm text-gray-700">
              I agree to receive messages from My Care Labs.
              </span>
            </label>
          </motion.div>

          <motion.button
            variants={primaryVariants}
            whileTap={{
              scale: 0.985,
            }}
            type="submit"
            className="mb-1.5 w-full rounded bg-blue-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-blue-700"
          >
            Submit
          </motion.button>
        </form>
        {notification && (
          <div className={`mt-4 p-2 text-white rounded ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
            {notification.message}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const SupplementalContent = () => {
  return (
    <div className="group sticky top-4 m-4 h-80 overflow-hidden rounded-3xl rounded-tl-[4rem] bg-slate-950 md:h-[calc(100vh_-_2rem)]">
      <img
        alt="An example image"
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/contact-bg-banner-desktop.webp"
        className="h-full w-full bg-white object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
      />

      <div className="absolute right-2 top-4 z-10">
        <FiArrowUpRight className="rotate-45 text-6xl text-indigo-200 opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100" />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        viewport={{ once: true }}
        className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-slate-950/90 to-slate-950/0 p-8"
      >
        <motion.h2
          className="mb-2 text-3xl font-semibold leading-[1.25] text-white lg:text-4xl"
          variants={primaryVariants}
        >
          Connecting 
          <br />
          with Opportunities
        </motion.h2>
        <motion.p
          variants={primaryVariants}
          className="mb-6 max-w-md text-sm text-slate-300"
        >
          Bloop is the home of makers, making amazing things, and getting paid.
          Find your dream job with us.
        </motion.p>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <motion.img
              variants={avatarVariants}
              className="h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/head-shots/1.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/head-shots/2.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/head-shots/3.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/head-shots/4.jpg"
            />
            <motion.img
              variants={avatarVariants}
              className="-ml-4 h-8 w-8 rounded-full border-[1px] border-slate-100 object-cover shadow-inner"
              alt="A placeholder testimonial image"
              src="/imgs/head-shots/6.jpg"
            />
          </div>
          <div>
            <motion.div variants={primaryVariants} className="flex gap-0.5">
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <FiStar className="fill-yellow-300 text-sm text-yellow-300" />
              <span className="ml-2 text-sm text-white">5.0</span>
            </motion.div>
            <motion.p
              variants={primaryVariants}
              className="text-xs text-slate-300"
            >
              from over 100,000 reviews
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const primaryVariants = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const avatarVariants = {
  initial: {
    x: 10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};
