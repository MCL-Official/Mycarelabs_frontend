import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';

const LeftContainer = () => (
  <div className="w-full md:w-1/4 pr-0 md:pr-6 border-b md:border-b-0 md:border-r border-gray-200 mb-4 md:mb-0">
    <div className="flex items-center mb-4">
      <img src="https://via.placeholder.com/40" alt="Avatar" className="rounded-full mr-4" />
      <div>
        <h3 className="text-lg font-semibold">Dhanush Bhandary</h3>
        <p className="text-gray-600">Free Strategy Session</p>
      </div>
    </div>
    <div className="flex items-center mb-4">
      <span className="material-icons text-gray-600">access_time</span>
      <span className="ml-2 text-gray-600">45 min</span>
    </div>
    <div className="flex items-center mb-4">
      <span className="material-icons text-gray-600">videocam</span>
      <span className="ml-2 text-gray-600">Web conferencing details provided upon confirmation.</span>
    </div>
    <p className="text-gray-600">This is a free strategy session to understand where you're at currently with your business/channel and discuss how we can take it to the next level with our systems.</p>
  </div>
);

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [shrinkButton, setShrinkButton] = useState(null);
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [showTimes, setShowTimes] = useState(false);
  const [showForm, setShowForm] = useState(false);
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
    "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM",
    "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
    "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM"
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
    const appointmentDetails = {
      ...formData,
      date: selectedDate,
      time: selectedTime,
    };

    try {
      await axios.post('http://localhost:5100/admin/appointments', appointmentDetails);
      alert('Appointment booked successfully!');
    } catch (error) {
      console.error('Error booking appointment', error);
      alert('Failed to book appointment. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-screen-lg flex flex-col md:flex-row overflow-hidden">
        <LeftContainer />
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
                      <div key={day} className="text-center text-gray-500">{day}</div>
                    ))}
                    {Array.from({ length: daysInMonth(monthIndex, year) }, (_, day) => (
                      <button
                        key={day}
                        className={`text-center rounded p-2 ${selectedDate === `${months[monthIndex]} ${day + 1}, ${year}` ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
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
                                enter: 'opacity-0 transform translate-x-full',
                                enterActive: `opacity-100 transform translate-x-0 transition-all duration-300 delay-${index * 100}`,
                                exit: 'opacity-100 transform translate-x-0',
                                exitActive: 'opacity-0 transform translate-x-full transition-all duration-300'
                              }}
                            >
                              <div className="relative mb-2">
                                <button
                                  className={`w-32 rounded p-2 border transition-all duration-300 ease-in-out ${shrinkButton === time ? 'transform scale-x-0 rotate-180' : ''} ${selectedTime === time ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-blue-500 border-blue-500'}`}
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
                Time zone <span className="font-semibold">India Standard Time (7:34pm)</span>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded mt-4 transition-transform transform hover:scale-105" onClick={handleContinue}>
                Continue
              </button>
            </>
          ) : (
            <form className="w-full" onSubmit={handleSubmit}>
              <h2 className="text-xl font-semibold mb-6">Enter Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label>First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="border p-2 rounded" required />
                </div>
                <div className="flex flex-col">
                  <label>Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="border p-2 rounded" required />
                </div>
                <div className="flex flex-col">
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="border p-2 rounded" required />
                </div>
                <div className="flex flex-col">
                  <label>Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="border p-2 rounded" required />
                </div>
                <div className="flex flex-col">
                  <label>Reason for testing?</label>
                  <select name="reason" value={formData.reason} onChange={handleInputChange} className="border p-2 rounded">
                    <option value="Symptoms">Symptoms</option>
                    <option value="Travel">Travel</option>
                    <option value="School">School</option>
                    <option value="Work">Work</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label>Zip Code</label>
                  <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} className="border p-2 rounded" required />
                </div>
                <div className="flex flex-col col-span-2">
                  <label>Additional Instructions</label>
                  <textarea name="instructions" value={formData.instructions} onChange={handleInputChange} className="border p-2 rounded"></textarea>
                </div>
                <div className="flex flex-col col-span-2">
                  <label>Passport Details (if applicable)</label>
                  <input type="text" name="passportDetails" value={formData.passportDetails} onChange={handleInputChange} className="border p-2 rounded" />
                </div>
                <div className="flex flex-col col-span-2">
                  <label>How did you find My Care Labs?</label>
                  <select name="foundVia" value={formData.foundVia} onChange={handleInputChange} className="border p-2 rounded">
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
    </div>
  );
};

export default DateTimePicker;
