import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getPotholes } from '../api/potholeApi';

function MapView() {
  const [potholes, setPotholes] = useState([]);

  useEffect(() => {
    getPotholes().then(data => setPotholes(data));
  }, []);

  return (
    <MapContainer center={[37.7749, -122.4194]} zoom={10} style={{ height: '500px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {potholes.map((p, idx) => (
        <Marker key={idx} position={[p.location.lat, p.location.lng]}>
          <Popup>{p.description}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
