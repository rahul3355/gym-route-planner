import React, { useState, useEffect } from 'react';
import GridVisualizer from './GridVisualizer';
import WorkoutRoute from './WorkoutRoute';
import WorkoutLog from './WorkoutLog';
import './GymRoutePlanner.css';

const GymRoutePlanner = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [workouts, setWorkouts] = useState({});
  const [route, setRoute] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState('');

  useEffect(() => {
    fetch('/workoutData.json')
      .then(response => response.json())
      .then(data => {
        setEquipmentList(data.equipment);
        setWorkouts(data.workouts);
      });
  }, []);

  const handleFindRoute = (workoutType) => {
    const workoutPath = workouts[workoutType] || [];
    console.log('Workout Path:', workoutPath);
    setRoute(workoutPath);
    setSelectedWorkout(workoutType);
  };

  return (
    <div>
      <h1>Gym Route Planner</h1>
      <div>
        <h2>Select Workout</h2>
        {Object.keys(workouts).map((workoutType) => (
          <button
            key={workoutType}
            className={`workout-button ${selectedWorkout === workoutType ? 'selected' : ''}`}
            onClick={() => handleFindRoute(workoutType)}
          >
            {workoutType}
          </button>
        ))}
      </div>
      {route && route.length > 0 && (
        <div>
          <h2>Selected Workout Route</h2>
          <WorkoutRoute equipmentList={equipmentList} path={route} />
        </div>
      )}
      <h2>Gym Layout</h2>
      <GridVisualizer equipmentList={equipmentList} path={route} />
      <WorkoutLog workouts={workouts} />
    </div>
  );
};

export default GymRoutePlanner;
