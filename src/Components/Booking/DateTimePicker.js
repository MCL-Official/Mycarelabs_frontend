import React, { useState } from 'react';

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [showTimes, setShowTimes] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('');
  const [dateSelected, setDateSelected] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = [2023, 2024, 2025, 2026, 2027];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const handlePreviousMonth = () => {
    setAnimationDirection('left');
    if (monthIndex === 0) {
      setMonthIndex(11);
      setYear(year - 1);
    } else {
      setMonthIndex(monthIndex - 1);
    }
  };

  const handleNextMonth = () => {
    setAnimationDirection('right');
    if (monthIndex === 11) {
      setMonthIndex(0);
      setYear(year + 1);
    } else {
      setMonthIndex(monthIndex + 1);
    }
  };

  const timeSlots = [
    "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", 
    "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", 
    "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", 
    "1:30 PM - 2:00 PM", "2:00 PM - 2:30 PM", "2:30 PM - 3:00 PM", 
    "3:00 PM - 3:30 PM", "3:30 PM - 4:00 PM"
  ];

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setDateSelected(true);
    setTimeout(() => {
      setShowTimes(true);
      setDateSelected(false);
    }, 500); // Match the animation duration
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Date & Time</h2>
          <div className="flex items-center space-x-2">
            <select
              value={months[monthIndex]}
              onChange={(e) => setMonthIndex(months.indexOf(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1"
            >
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
            <select
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1"
            >
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <button 
              className="border border-gray-300 rounded px-2 py-1"
              onClick={handlePreviousMonth}
            >
              &lt;
            </button>
            <button 
              className="border border-gray-300 rounded px-2 py-1"
              onClick={handleNextMonth}
            >
              &gt;
            </button>
          </div>
        </div>
        {!showTimes && (
          <div className={`grid grid-cols-7 gap-2 mb-4 ${dateSelected ? 'animate-fade-up' : ''}`}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="text-center text-gray-500">{day}</div>
            ))}
            {Array.from({ length: daysInMonth(monthIndex, year) }, (_, day) => (
              <button
                key={day}
                className={`text-center rounded transition-transform transform ${
                  selectedDate === `${months[monthIndex]} ${day + 1}, ${year} - 9:00 AM` 
                    ? 'bg-red-500 text-white scale-110'
                    : 'bg-gray-200'
                } p-2`}
                onClick={() => handleDateClick(`${months[monthIndex]} ${day + 1}, ${year} - 9:00 AM`)}
              >
                {day + 1}
              </button>
            ))}
          </div>
        )}
        {showTimes && (
          <div className="animate-slide-up">
            <div className="text-center text-gray-700 mb-4">
              {selectedDate}
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`text-center rounded border border-blue-500 transition-transform transform hover:scale-105 ${
                    selectedDate.includes(time) ? 'bg-red-500 text-white' : 'bg-white text-blue-500'
                  } p-2`}
                  onClick={() => setSelectedDate(`${selectedDate.split(' - ')[0]} - ${time}`)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}
        <button className="w-full bg-orange-500 text-white py-2 rounded transition-transform transform hover:scale-105">
          Continue
        </button>
      </div>
    </div>
  );
};

export default DateTimePicker;