import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './WorkoutLog.css';

const WorkoutLog = ({ workouts }) => {
  const [date, setDate] = useState(new Date());
  const [workoutType, setWorkoutType] = useState('');
  const [log, setLog] = useState([]);

  const handleAddLog = () => {
    if (workoutType) {
      setLog([...log, { date: date.toLocaleDateString(), workoutType }]);
      setWorkoutType('');
    }
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
            popperPlacement="bottom" // Set the popper placement to bottom
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
        <button onClick={handleAddLog}>Add Log</button>
      </div>
      <div className="log-table">
        <h3>Logged Workouts</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Workout Type</th>
            </tr>
          </thead>
          <tbody>
            {log.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.workoutType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkoutLog;
