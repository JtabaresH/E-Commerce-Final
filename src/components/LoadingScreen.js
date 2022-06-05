import React from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="overlay">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingScreen;
