import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';
import logo1 from "../../Assets/Logo1.png";
import { useNavigate } from 'react-router-dom';
import Example from './BarLoader';  // Ensure correct path
import StackedNotifications from './StackedNotifications';  // Ensure correct path

const LeftContainer = ({ cardData }) => {
  return (
    <div className="w-full md:w-1/4 pr-0 md:pr-6 border-b md:border-b-0 md:border-r border-gray-200 mb-4 md:mb-0">
      <div className="flex flex-col items-center">
        <img src={logo1} alt="My Care Labs Logo" className="w-42 mb-4" />
        <h2 className="text-xl font-bold mb-2">Booking For</h2>
        <p className="text-gray-600 mb-4">{cardData?.cardData?.title}</p>
        <div className="w-full h-64 mb-4">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?q=Fremont,%20CA%2094538&z=15&output=embed"
          ></iframe>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <p className="text-blue-500">support@mycarelabs.com</p>
        </div>
      </div>
    </div>
  );
};

const DateTimePicker = (cardData) => {
  console.log(cardData?.cardData?.category,"dskvjbjbdhsvbhjvb");
  // const data = 
  const formatCategoryName = (data) => {
    console.log("datadatadatadatadata",data)
    try {
      if (typeof data !== 'string') {
        throw new Error('Input must be a string');
      }
  
      return data
        .replace(/[&%@!#^*+\|"'<>?]/g, '-') // Replaces special characters with hyphens
        .replace(/\s+|\.|,|:/g, '-') // Replaces spaces, dots, commas, and colons with hyphens
        .replace(/-+/g, '-') // Removes consecutive hyphens
        .replace(/-+$/, '') // Removes trailing hyphens
        .toLowerCase();
    } catch (error) {
      console.error('Error formatting category name:', error.message);
      return '';
    }
  };

  const formattedCategory = formatCategoryName(cardData?.cardData?.category);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [shrinkButton, setShrinkButton] = useState(null);
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [showTimes, setShowTimes] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: '',
    zipCode: '',
    instructions: '',
    passportDetails: '',
    foundVia: '',
  });
  const [invalidFields, setInvalidFields] = useState({});

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const handlePreviousMonth = () => {
    if (monthIndex === 0) {
      setMonthIndex(11);
      setYear(year - 1);
    } else {
      setMonthIndex(monthIndex - 1);
    }
  };

  const handleNextMonth = () => {
    if (monthIndex === 11) {
      setMonthIndex(0);
      setYear(year + 1);
    } else {
      setMonthIndex(monthIndex + 1);
    }
  };

  const timeSlots = [
    "9:00 AM",
    "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
    "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM", "6:00 PM"
  ];

  const handleDateClick = (day) => {
    const date = `${months[monthIndex]} ${day + 1}, ${year}`;
    setSelectedDate(date);
    setShowTimes(true);
  };

  const handleTimeClick = (time) => {
    setShrinkButton(time);
    setSelectedTime(time);
    setTimeout(() => setShrinkButton(null), 300); // Reset after the animation duration
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContinue = () => {
    setShowForm(true);
  };

  const handleSubmit = async () => {
    // Check for required fields
    const newInvalidFields = {};
    if (!formData.firstName) newInvalidFields.firstName = true;
    if (!formData.lastName) newInvalidFields.lastName = true;
    if (!formData.email) newInvalidFields.email = true;
    if (!formData.phone) newInvalidFields.phone = true;
    if (!formData.reason) newInvalidFields.reason = true;
    if (!formData.zipCode) newInvalidFields.zipCode = true;
    if (!selectedDate) newInvalidFields.selectedDate = true;
    if (!selectedTime) newInvalidFields.selectedTime = true;

    if (Object.keys(newInvalidFields).length > 0) {
      setInvalidFields(newInvalidFields);
      setNotification({
        id: Math.random(),
        text: 'Please fill all the required fields.',
      });
      return;
    }

    const appointmentDetails = {
      ...formData,
      date: selectedDate,
      time: selectedTime,
    };

    setIsLoading(true);

    try {
      await axios.post('https://backend.mycaretrading.com/admin/appointments', appointmentDetails);
      setIsLoading(false);
      setNotification({
        id: Math.random(),
        text: 'Appointment booked successfully!'
      });
      navigate(`/bookingcompletion/${formattedCategory}`);
    } catch (error) {
      setIsLoading(false);
      console.error('Error booking appointment', error);
      setNotification({
        id: Math.random(),
        text: 'Failed to book appointment. Please try again.'
      });
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen p-4">
      <div className={`bg-white shadow-lg rounded-lg p-8 w-full max-w-screen-lg flex flex-col md:flex-row overflow-hidden ${isLoading ? 'blur-0' : ''}`}>
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75 z-50">
          <Example />
        </div>
      )}
        <LeftContainer cardData={cardData} />
        <div className="w-full md:w-3/4 pl-0 md:pl-4 transition-all duration-500">
          {!showForm ? (
            <>
              <h2 className="text-xl font-semibold mb-6">Select a Date & Time</h2>
              <div className="flex justify-between items-center mb-4">
                <button
                  className="border border-gray-300 rounded px-2 py-1"
                  onClick={handlePreviousMonth}
                >
                  &lt;
                </button>
                <span className="text-lg font-semibold">{months[monthIndex]} {year}</span>
                <button
                  className="border border-gray-300 rounded px-2 py-1"
                  onClick={handleNextMonth}
                >
                  &gt;
                </button>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className={`w-full ${showTimes ? 'md:w-3/5' : ''} transition-all duration-500 max-h-96 overflow-y-auto`}>
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                      <div key={day} className="text-center text-xs sm:text-lg text-gray-500">{day}</div>
                    ))}
                    {Array.from({ length: daysInMonth(monthIndex, year) }, (_, day) => (
                      <button
                        key={day}
                        className={`text-center text-xs sm:text-lg rounded p-1 ${selectedDate === `${months[monthIndex]} ${day + 1}, ${year}` ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => handleDateClick(day)}
                      >
                        {day + 1}
                      </button>
                    ))}
                  </div>
                </div>
                <div className={`transition-all duration-500 ${showTimes ? 'w-full md:w-2/5 pl-0 md:pl-4' : 'w-0'}`}>
                  <div className="overflow-y-auto max-h-96">
                    {showTimes && (
                      <>
                        <div className="text-center text-lg font-semibold mb-4">{selectedDate}</div>
                        <TransitionGroup>
                          {timeSlots.map((time, index) => (
                            <CSSTransition
                              key={time}
                              timeout={300}
                              classNames={{
                                enter: 'opacity-0 transform scale-75',
                                enterActive: `opacity-100 transform scale-100 transition-all duration-300 delay-${index * 100}`,
                                exit: 'opacity-100 transform scale-100',
                                exitActive: 'opacity-0 transform scale-75 transition-all duration-300'
                              }}
                            >
                              <div className="relative mb-2">
                                <button
                                  className={`w-32 rounded p-2 border transition-all duration-300 ease-in-out ${shrinkButton === time ? 'transform scale-50' : ''} ${selectedTime === time ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-blue-500 border-blue-500'}`}
                                  onClick={() => handleTimeClick(time)}
                                >
                                  {selectedTime === time ? "Next" : time}
                                </button>
                              </div>
                            </CSSTransition>
                          ))}
                        </TransitionGroup>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-center text-gray-700 mt-4">
                {/* Time zone <span className="font-semibold">India Standard Time (7:34pm)</span> */}
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded mt-4 transition-transform transform hover:scale-105" onClick={handleContinue}>
                Continue
              </button>
            </>
          ) : (
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
              <h2 className="text-xl font-semibold mb-6">Enter Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="flex flex-col col-span-2 md:col-span-1">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`border p-2 rounded ${invalidFields.firstName ? 'border-red-500' : ''}`}
                    required
                  />
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`border p-2 rounded ${invalidFields.lastName ? 'border-red-500' : ''}`}
                    required
                  />
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`border p-2 rounded ${invalidFields.email ? 'border-red-500' : ''}`}
                    required
                  />
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`border p-2 rounded ${invalidFields.phone ? 'border-red-500' : ''}`}
                    required
                  />
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1">
                  <label>Reason for testing?</label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    className={`border p-2 rounded ${invalidFields.reason ? 'border-red-500' : ''}`}
                    required
                  >
                    <option value="">Select Reason</option>
                    <option value="Symptoms">Symptoms</option>
                    <option value="Travel">Travel</option>
                    <option value="School">School</option>
                    <option value="Work">Work</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className={`border p-2 rounded ${invalidFields.zipCode ? 'border-red-500' : ''}`}
                    required
                  />
                </div>
                <div className="flex flex-col col-span-2 ">
                  <label>Additional Instructions</label>
                  <textarea
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                  ></textarea>
                </div>
                <div className="flex flex-col col-span-2">
                  <label>Passport Details (if applicable)</label>
                  <input
                    type="text"
                    name="passportDetails"
                    value={formData.passportDetails}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col col-span-2">
                  <label>How did you find My Care Labs?</label>
                  <select
                    name="foundVia"
                    value={formData.foundVia}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                  >
                    <option value="">Select Option</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Google search">Google search</option>
                    <option value="CDPH website">CDPH website</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <button type="button" onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded mt-4 transition-transform transform hover:scale-105">
                Book Appointment
              </button>
            </form>
          )}
        </div>
      </div>
      {notification && (
        <StackedNotifications
          notification={notification}
          setNotification={setNotification}
        />
      )}
    </div>
  );
};

export default DateTimePicker;
