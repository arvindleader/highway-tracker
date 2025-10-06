import React, { useState } from 'react';
import { createPothole } from '../api/potholeApi';

function PotholeForm() {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPothole({ location: { lat, lng }, description });
    alert('Pothole reported!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Latitude" value={lat} onChange={e => setLat(e.target.value)} />
      <input type="text" placeholder="Longitude" value={lng} onChange={e => setLng(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Report Pothole</button>
    </form>
  );
}

export default PotholeForm;
