import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './WorkoutLog.css';
import CustomCalendar from './CustomCalender';

const WorkoutLog = ({ workouts }) => {
  const [date, setDate] = useState(new Date());
  const [workoutType, setWorkoutType] = useState('');
  const [log, setLog] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddLog = () => {
    if (workoutType) {
      if (editIndex !== null) {
        const updatedLog = [...log];
        updatedLog[editIndex] = { date: date.toLocaleDateString(), workoutType };
        setLog(updatedLog);
        setEditIndex(null);
      } else {
        setLog([...log, { date: date.toLocaleDateString(), workoutType }]);
      }
      setWorkoutType('');
    }
  };

  const handleEdit = (index) => {
    setDate(new Date(log[index].date));
    setWorkoutType(log[index].workoutType);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedLog = log.filter((_, i) => i !== index);
    setLog(updatedLog);
  };

  return (
    <div className="workout-log">
      <h2>Workout Log Book</h2>
      <div className="log-form">
        <div>
          <label>Select Date: </label>
          <DatePicker 
            selected={date} 
            onChange={(date) => setDate(date)}
            popperClassName="react-datepicker-popper"
          />
        </div>
        <div>
          <label>Select Workout: </label>
          <select
            value={workoutType}
            onChange={(e) => setWorkoutType(e.target.value)}
          >
            <option value="">Select Workout</option>
            {Object.keys(workouts).map((workout) => (
              <option key={workout} value={workout}>
                {workout}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleAddLog}>{editIndex !== null ? 'Update Log' : 'Add Log'}</button>
      </div>
      <div className="log-table">
        <h3>Logged Workouts</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Workout Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {log.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.workoutType}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CustomCalendar log={log} />
    </div>
  );
};

export default WorkoutLog;
