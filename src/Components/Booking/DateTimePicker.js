import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';
import logo1 from "../../Assets/Logo1.png";
import { useNavigate } from 'react-router-dom';
import Example from './BarLoader';  // Ensure correct path
import StackedNotifications from './StackedNotifications';  // Ensure correct path
import moment from 'moment-timezone';
import { FiArrowLeft } from 'react-icons/fi';

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
          <p className="text-blue-500">+1-800-790-4550</p>
        </div>
      </div>
    </div>
  );
};
// const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

const DateTimePicker = (cardData) => {
  console.log(cardData?.cardData?.category, "dskvjbjbdhsvbhjvb");
  // const data = 
  const formatCategoryName = (data) => {
    console.log("datadatadatadatadata", data)
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
  const today = new Date();
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
    Employee: cardData?.cardData?.category,
    Location: cardData?.cardData?.location,
    Service: ''
  });
  const [invalidFields, setInvalidFields] = useState({});

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // const emptyCells = firstDayOfMonth;/
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();

  // Calculate the number of empty cells at the start of the calendar grid
  const emptyCells = firstDayOfMonth;

  const handlePreviousMonth = () => {
    setMonthIndex(prev => prev === 0 ? 11 : prev - 1);
    if (monthIndex === 0) {
      setYear(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    setMonthIndex(prev => prev === 11 ? 0 : prev + 1);
    if (monthIndex === 11) {
      setYear(prev => prev + 1);
    }
  };

  const isDateInPast = (day, month, year) => {
    const date = new Date(year, month, day + 1);
    return date.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0);
  };

  const isTimeInPast = (time) => {
    if (!selectedDate) return false;
    const selectedDateTime = new Date(`${selectedDate} ${time}`);
    return selectedDateTime.getTime() <= Date.now();
  };
  const handleDateClick = (day) => {
    if (isDateInPast(day, monthIndex, year)) return; // Prevent selecting past dates
    const date = `${year}-${monthIndex + 1}-${day + 1}`;
    setSelectedDate(date);
    setShowTimes(true);
  };



  // const handleNextMonth = () => {
  //   if (monthIndex === 11) {
  //     setMonthIndex(0);
  //     setYear(year + 1);
  //   } else {
  //     setMonthIndex(monthIndex + 1);
  //   }
  // };

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
    "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM", "6:00 PM"
  ];

  // const handleDateClick = (day) => {
  //   const date = `${months[monthIndex]} ${day + 1}, ${year}`;
  //   setSelectedDate(date);
  //   setShowTimes(true);
  // };

  // const handleTimeClick = (time) => {
  //   setShrinkButton(time);
  //   setSelectedTime(time);
  //   setTimeout(() => setShrinkButton(null), 300); // Reset after the animation duration
  // };

  const handleTimeClick = (time) => {
    if (isTimeInPast(time)) return; // Prevent selecting past times
    setSelectedTime(time);
  };

  const timeButtonClass = (time) => {
    if (isTimeInPast(time)) return "bg-gray-200 text-gray-400 cursor-not-allowed"; // Non-selectable times
    return selectedTime === time ? "bg-blue-500 text-white border-blue-500" : "bg-white text-blue-500 border-blue-500 hover:bg-blue-100";
  };
  // const date = `${monthIndex + 1}-${day + 1}-${year}`;

  const isDateSelectable = (day) => {
    const date = new Date(year, monthIndex, day + 1);
    return date >= new Date(new Date().setHours(0, 0, 0, 0));
  };

  const dateButtonClass = (day) => {
    const fullDate = `${year}-${monthIndex + 1}-${day + 1}`;
    if (selectedDate === fullDate) return "bg-blue-500 text-white"; // Selected date
    if (!isDateSelectable(day)) return "bg-gray-200 text-gray-500 cursor-not-allowed"; // Past date or not open
    return "bg-gray-300 hover:bg-gray-400 cursor-pointer"; // Selectable date
  };


  function formatPhoneNumber(value) {
    // Remove all non-digit characters from the input
    const digits = value.replace(/\D/g, '');

    // Limit the input to 10 digits
    const trimmed = digits.slice(0, 10);

    // Format the digits based on the expected phone number format
    const match = trimmed.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      // Reformat the number to (xxx) xxx-xxxx
      return `${match[1] ? `(${match[1]}` : ''}${match[2] ? `) ${match[2]}` : ''}${match[3] ? `-${match[3]}` : ''}`;
    }
    return value;
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === 'phone') {
      // Format the phone number before setting it in state
      const formattedPhoneNumber = formatPhoneNumber(value);
      setFormData(prevState => ({
        ...prevState,
        [name]: formattedPhoneNumber
      }));
    } else {
      // Handle other inputs normally
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  }


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
    // if (!formData.reason) newInvalidFields.reason = true;
    // if (!formData.zipCode) newInvalidFields.zipCode = true;
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
      date: moment.tz(`${selectedDate} ${selectedTime}`, "America/Los_Angeles").format(),
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
      console.log("sdkjvsdsvsdvjsvsd,", formattedCategory);


      // at-home-test-kit
      // northern-california-fremont-lab
      // southern-california-riverside-county-mobile-testing
      // northern-california-mobile-testing
      // riverside-gurdwara-pop-up
      if (formattedCategory === 'northern-california-fremont-lab') {
        navigate(`/fremont-laboratory-thank-you`, { state: { appointmentDetails } });
      } else if (formattedCategory === 'southern-california-riverside-county-mobile-testing') {
        navigate(`/riverside-mobile-testing-thank-you`, { state: { appointmentDetails } });
      } else if (formattedCategory === 'northern-california-mobile-testing') {
        navigate(`/california-mobile-testing-thank-you`, { state: { appointmentDetails } });
      }
      else if (formattedCategory === 'riverside-gurdwara-pop-up') {
        navigate(`/riverside-gurdwara-thank-you`, { state: { appointmentDetails } });
      }
      else if (formattedCategory === 'at-home-test-kit') {
        // navigate(`/thankyoupage3`, { state: { cardData } });

        // navigate(`/bookingcompletion/${formattedCategory}`, { state: { cardData } });
      }
      else {
        // navigate(`/bookingcompletion/${formattedCategory}`, { state: { cardData } });

        console.log("sdkjvsdsvsdvjsvsd,", formattedCategory);
      }
      // navigate(`/bookingcompletion/${formattedCategory}`, { state: { cardData } });
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
                <button className="border border-gray-300 rounded px-2 py-1" onClick={handlePreviousMonth}>&lt;</button>
                <span className="text-lg font-semibold">{months[monthIndex]} {year}</span>
                <button className="border border-gray-300 rounded px-2 py-1" onClick={handleNextMonth}>&gt;</button>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className={`w-full ${showTimes ? 'md:w-3/5' : ''} transition-all duration-500 max-h-96 overflow-y-auto`}>
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {daysOfWeek.map(day => (
                      <div key={day} className="text-center text-xs sm:text-lg text-gray-500">{day}</div>
                    ))}
                    {Array.from({ length: emptyCells }, (_, index) => (
                      <div key={index} className="text-center text-xs sm:text-lg p-1"></div>
                    ))}
                    {Array.from({ length: daysInMonth }, (_, index) => (
                      <button key={index}
                        className={`text-center text-xs sm:text-lg rounded p-1 ${dateButtonClass(index)}`}
                        onClick={() => handleDateClick(index)}
                        disabled={!isDateSelectable(index)}>
                        {index + 1}
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
                                exitActive: 'opacity-0 transform scale-75 transition-all duration-300',
                              }}
                            >
                              <div className="relative mb-2">
                                <button
                                  className={`w-32 rounded p-2 border transition-all duration-300 ease-in-out ${timeButtonClass(time)}`}
                                  onClick={() => handleTimeClick(time)}
                                  disabled={isTimeInPast(time)} // Disable button if time is in the past
                                >
                                  {selectedTime === time ? "Selected" : time}
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
              <div className="flex justify-between items-center w-full">
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-300 flex items-center"
                  onClick={() => setShowForm(false)}
                >
                  <FiArrowLeft className="mr-2" />
                  Back
                </button>
                <h2 className="text-xl font-semibold mb-6 flex-1 text-center">Enter Details</h2>
                <div className="opacity-0">  // Invisible spacer to balance the header
                  <FiArrowLeft className="mr-2" />
                  Back
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="flex flex-col   col-span-2 md:col-span-1">
                  <label>First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder='John'
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`border p-2 rounded ${invalidFields.firstName ? 'border-red-500' : ''}`}
                    required
                  />
                </div>
                <div className="flex flex-col   col-span-2 md:col-span-1">
                  <label>Last Name*</label>
                  <input
                    type="text"
                    placeholder='Doh'
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`border p-2 rounded ${invalidFields.lastName ? 'border-red-500' : ''}`}
                    required
                  />
                </div>
                <div className="flex flex-col  col-span-2 md:col-span-1">
                  <label>Email*</label>
                  <input
                    type="email"  // Specifies the type as email for built-in validation
                    placeholder='abc@gmail.com'
                    name="email"  // Name attribute used to identify the element in form data handling
                    value={formData.email}  // Controlled component, value is driven by React state
                    onChange={handleInputChange}  // Updates state upon input changes
                    className={`border p-2 rounded ${invalidFields.email ? 'border-red-500' : ''}`}  // Conditional styling
                    required  // Makes the field required for form submission
                  />
                </div>
                <div className="flex flex-col   col-span-2 md:col-span-1">
                  <label>Phone*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`border p-2 rounded ${invalidFields.phone ? 'border-red-500' : ''}`}
                    placeholder="(xxx) xxx-xxxx"
                    required
                  />
                </div>
                {/* <div className="flex flex-col col-span-2 md:col-span-1">
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
                </div> */}
                {/* <div className="flex flex-col col-span-2 ">
                  <label>Additional Instructions</label>
                  <textarea
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                  ></textarea>
                </div> */}
                {/* <div className="flex flex-col col-span-2">
                  <label>Passport Details (if applicable)</label>
                  <input
                    type="text"
                    name="passportDetails"
                    value={formData.passportDetails}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                  />
                </div> */}
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
              <button type="button" onClick={handleSubmit} className="w-full bg-blue-500 text-white text-lg py-2 rounded mt-24 transition-transform transform hover:scale-105">
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
