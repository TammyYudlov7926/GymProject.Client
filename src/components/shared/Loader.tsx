import React from 'react';
import '../../css/Loader.css';

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
}
