import React from 'react';
import '../styles/main.css';

const LoadingScreen = () => {
  return (
    <div className="overlay">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingScreen;
