import React from 'react';
import './GridVisualizer.css';

const GridVisualizer = ({ equipmentList, path }) => {
  const gridSize = 5; // Define the size of the grid (5x5 for this example)
  const grid = Array.from({ length: gridSize }, (_, rowIndex) =>
    Array.from({ length: gridSize }, (_, colIndex) => {
      const equipment = equipmentList.find(
        equip => equip.row === rowIndex && equip.col === colIndex
      );
      return equipment ? equipment.name : '';
    })
  );

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div className="grid-row" key={rowIndex}>
          {row.map((cell, colIndex) => {
            const equipment = equipmentList.find(
              equip => equip.row === rowIndex && equip.col === colIndex
            );
            const isInPath = equipment && path.includes(equipment.id);
            return (
              <div
                className={`grid-cell ${isInPath ? 'highlight' : ''}`}
                key={colIndex}
              >
                {cell}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GridVisualizer;
