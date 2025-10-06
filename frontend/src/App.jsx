import React from 'react';
import MapView from './components/MapView';
import PotholeForm from './components/PotholeForm';

function App() {
  return (
    <div>
      <h1>Highway Traffic & Pothole Tracker</h1>
      <PotholeForm />
      <MapView />
    </div>
  );
}

export default App;
