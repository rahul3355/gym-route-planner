import React, { useState, useEffect } from 'react';
import './GridVisualizer.css';

const GridVisualizer = ({ equipmentList, path }) => {
  const gridSize = 6; // Define the size of the grid (6x6 for this example)
  const [visiblePath, setVisiblePath] = useState([]);

  useEffect(() => {
    setVisiblePath([]); // Reset visible path when path changes
    if (path.length > 0) {
      animatePath();
    }
  }, [path]);

  const animatePath = () => {
    path.forEach((id, index) => {
      setTimeout(() => {
        setVisiblePath((prevPath) => [...prevPath, id]);
      }, index * 100); // 500ms delay for each cell
    });
  };

  const grid = Array.from({ length: gridSize }, (_, rowIndex) =>
    Array.from({ length: gridSize }, (_, colIndex) => {
      const equipment = equipmentList.find(
        equip => equip.row === rowIndex && equip.col === colIndex
      );
      return equipment ? equipment.name : '';
    })
  );

  return (
    <div className="grid-container">
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div className="grid-row" key={rowIndex}>
            {row.map((cell, colIndex) => {
              const equipment = equipmentList.find(
                equip => equip.row === rowIndex && equip.col === colIndex
              );
              const isInPath = equipment && visiblePath.includes(equipment.id);
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
    </div>
  );
};

export default GridVisualizer;
