import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import axios from "axios";
import { Link } from "react-router-dom";
import heroImg from "../../Assets/b2b Contact.webp";
import ServiceSection from "../../Components/LandingPagesComps/ServiceSection";
import WeServe from "../../Components/LandingPagesComps/WeServe";
import ContactForm from "../../Components/LandingPagesComps/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <Banner />
      <Form />
      <ServiceSection/>
      <WeServe/>
      <ContactForm/>
    </div>
  );
};
export default ContactPage;

const Form = () => {
  return (
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="w-[100%] lg:w-[55%] rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.7855926972115!2d-121.9839515!3d37.5171131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc7ea104a402f%3A0xc7146e61f8e25f8e!2sMy%20Care%20Labs!5e0!3m2!1sen!2sus!4v1694974079193!5m2!1sen!2sus"
          ></iframe>
          <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p class="mt-1">
              5500 Stewart Avenue, Suite 108, Fremont, CA 94538
              </p>
            </div>
            <div class="lg:w-1/2 px-6 lg:mt-0">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                PHONE
              </h2>
              <a href="tel:+1-800-790-4550" class="leading-relaxed text-gray-900 no-underline hover:underline">+1-800-790-4550</a>
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                Fax
              </h2>
              <p class="text-gray-900 leading-relaxed">
              +1-888-289-9940
              </p>
            </div>
          </div>
        </div>
        <div class="w-[100%] lg:w-[40%] bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <ContactFormHero/>
          {/* <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p class="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
          <p class="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p> */}
        </div>
      </div>
    </section>
  );
};

const ContactFormHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    zipCode: "",
    message: "",
  });
  const [notification, setNotification] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData," formdata")
    try {
      const response = await axios.post(
        "https://bookingbackend.mycaretrading.com/portal/admin/api/contact/mycarelabs",
        formData
      );
      console.log(response, "API Response");
      setNotification({
        type: "success",
        message: "Contact form details sent successfully!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setNotification({
        type: "error",
        message: "Failed to send contact form details. Please try again.",
      });
    }
  };

  return (
    <div className="text-gray-900">
      <h3 className="text-4xl font-bold text-center text-black">
        REQUEST A CALL BACK
      </h3>
      <form
        className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 border rounded-lg focus:outline-none"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded-lg focus:outline-none"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="w-full p-2 border rounded-lg focus:outline-none"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company (Optional)"
          className="w-full p-2 border rounded-lg focus:outline-none"
          value={formData.company}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Comments (Optional)"
          rows="3"
          className="col-span-1 sm:col-span-2 w-full p-3 border rounded-lg focus:outline-none"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <button
          type="submit"
          className="col-span-1 sm:col-span-2 w-full py-2 bg-blue-600 text-2xl text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {notification && (
        <p
          className={`mt-4 text-center text-xl ${
            notification.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {notification.message}
        </p>
      )}

      <p className="mt-3 text-3xl text-center text-gray-700">
        Call Us at{" "}
        <a
          href="tel:800-790-4550"
          className="text-blue-600 text-3xl no-underline font-bold hover:underline"
        >
          800-790-4550
        </a>
      </p>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="relative mt-24 pt-4">
      {/* Background and overlay */}
      <div className="relative h-64">
        {" "}
        {/* Set height to make it a short banner */}
        <img
          src={heroImg} // Replace with the correct path to your image
          alt="Doctors"
          className="w-full h-full object-cover" // Ensure the image covers the div properly
        />
        <div className="absolute  inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-7xl font-bold">
            Contact Us.
          </h1>
        </div>
      </div>
    </div>
  );
};
