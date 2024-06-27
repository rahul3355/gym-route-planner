import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../src/firebaseConfig';
import './WorkoutLog.css';
import CustomCalendar from './CustomCalender';

const WorkoutLog = ({ workouts }) => {
  const [date, setDate] = useState(new Date());
  const [workoutType, setWorkoutType] = useState('');
  const [log, setLog] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editDocId, setEditDocId] = useState(null);

  // Fetch workout logs from Firestore
  const fetchLogs = async () => {
    console.log('Fetching logs from Firestore');
    try {
      const querySnapshot = await getDocs(collection(db, 'workoutLogs'));
      const logs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log('Fetched logs:', logs);
      setLog(logs);
    } catch (error) {
      console.error('Error fetching logs:', error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleAddLog = async () => {
    if (workoutType) {
      const newLog = { date: date.toLocaleDateString(), workoutType };
      console.log('Adding log:', newLog);
      try {
        if (editIndex !== null) {
          const logDoc = doc(db, 'workoutLogs', editDocId);
          await updateDoc(logDoc, newLog);
          console.log('Updated log:', newLog);
          setEditIndex(null);
          setEditDocId(null);
        } else {
          await addDoc(collection(db, 'workoutLogs'), newLog);
          console.log('Added new log:', newLog);
        }
        fetchLogs();
        setWorkoutType('');
      } catch (error) {
        console.error('Error adding/updating log:', error);
      }
    }
  };

  const handleEdit = (index) => {
    const logEntry = log[index];
    console.log('Editing log entry:', logEntry);
    setDate(new Date(logEntry.date));
    setWorkoutType(logEntry.workoutType);
    setEditIndex(index);
    setEditDocId(logEntry.id);
  };

  const handleDelete = async (index) => {
    const logEntry = log[index];
    console.log('Deleting log entry:', logEntry);
    try {
      const logDoc = doc(db, 'workoutLogs', logEntry.id);
      await deleteDoc(logDoc);
      console.log('Deleted log entry:', logEntry);
      fetchLogs();
    } catch (error) {
      console.error('Error deleting log entry:', error);
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
              <tr key={entry.id}>
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
