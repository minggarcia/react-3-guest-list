import React from 'react';
import LoaderImage from './image/Spin.gif';

const LoadingIndicator = () => {
  return (
    <div className="indicatorContainer">
      <img src={LoaderImage} className="loader" alt="loading" />
    </div>
  );
};

export default LoadingIndicator;
