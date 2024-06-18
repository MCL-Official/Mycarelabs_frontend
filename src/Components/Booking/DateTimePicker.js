import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ClipLoader } from 'react-spinners';
import './DateTimePicker.css';

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [showTimes, setShowTimes] = useState(false);
  const [loading, setLoading] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = [2023, 2024, 2025, 2026, 2027];

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
    setLoading(true);
    setShowTimes(false);
    setTimeout(() => {
      setShowTimes(true);
      setLoading(false);
    }, 1000); // Simulate loading time
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-screen-lg flex">
        <div className="w-1/4 pr-6 border-r border-gray-200">
          <div className="flex items-center mb-4">
            <img src="https://via.placeholder.com/40" alt="Avatar" className="rounded-full mr-4"/>
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
        <div className="w-3/4 pl-6 transition-all duration-500">
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
          <div className="flex">
            <div className={`w-full ${showTimes ? 'md:w-1/2' : ''} transition-all duration-500`}>
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
            <CSSTransition
              in={showTimes}
              timeout={500}
              classNames="time-panel"
              unmountOnExit
            >
              <div className="w-full md:w-1/2 pl-4 transition-all duration-500 overflow-y-auto max-h-96">
                {loading ? (
                  <div className="flex justify-center items-center h-full">
                    <ClipLoader size={50} color={"#3b82f6"} />
                  </div>
                ) : (
                  <>
                    <div className="text-center text-lg font-semibold mb-4">{selectedDate}</div>
                    <div className="grid grid-cols-1 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          className={`rounded p-2 border ${selectedTime === time ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500'}`}
                          onClick={() => handleTimeClick(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </CSSTransition>
          </div>
          <div className="text-center text-gray-700 mt-4">
            Time zone <span className="font-semibold">India Standard Time (7:34pm)</span>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded mt-4 transition-transform transform hover:scale-105">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;
