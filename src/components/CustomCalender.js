import React, { useState } from 'react';
import './CustomCalender.css';

const CustomCalender = ({ log }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

    const dates = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      dates.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = new Date(currentYear, currentMonth, day).toLocaleDateString();
      const isHighlighted = log.some(entry => entry.date === dateString);
      dates.push(
        <div key={day} className={`day${isHighlighted ? ' highlighted' : ''}`}>
          {day}
        </div>
      );
    }

    return dates;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="custom-calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h3>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}</h3>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        <div className="day-name">Sun</div>
        <div className="day-name">Mon</div>
        <div className="day-name">Tue</div>
        <div className="day-name">Wed</div>
        <div className="day-name">Thu</div>
        <div className="day-name">Fri</div>
        <div className="day-name">Sat</div>
        {renderCalendar()}
      </div>
    </div>
  );
};

export default CustomCalender;
