import React from 'react';
import './WorkoutRoute.css';

const WorkoutRoute = ({ equipmentList, path }) => {
  const getEquipmentById = (id) => equipmentList.find(equip => equip.id === id);

  return (
    <div className="workout-route">
      {path.map((id, index) => {
        const equipment = getEquipmentById(id);
        return (
          <div key={index} className="workout-item">
            <div className="workout-box">
              {equipment.name}
            </div>
            {index < path.length - 1 && <div className="workout-arrow" />}
          </div>
        );
      })}
    </div>
  );
};

export default WorkoutRoute;
