import React, { useState } from 'react';

const EquipmentForm = ({ equipmentList, onAddEquipment }) => {
  const [name, setName] = useState('');
  const [connections, setConnections] = useState([]);
  const [row, setRow] = useState('');
  const [col, setCol] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEquipment = {
      id: `${equipmentList.length + 1}`,
      name,
      connections,
      row: parseInt(row, 10),
      col: parseInt(col, 10),
    };
    onAddEquipment(newEquipment);
    setName('');
    setConnections([]);
    setRow('');
    setCol('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Equipment Name"
        required
      />
      <input
        type="number"
        value={row}
        onChange={(e) => setRow(e.target.value)}
        placeholder="Row"
        required
      />
      <input
        type="number"
        value={col}
        onChange={(e) => setCol(e.target.value)}
        placeholder="Column"
        required
      />
      <select multiple onChange={(e) => setConnections(Array.from(e.target.selectedOptions, option => option.value))}>
        {equipmentList.map(equip => (
          <option key={equip.id} value={equip.id}>{equip.name}</option>
        ))}
      </select>
      <button type="submit">Add Equipment</button>
    </form>
  );
};

export default EquipmentForm;
