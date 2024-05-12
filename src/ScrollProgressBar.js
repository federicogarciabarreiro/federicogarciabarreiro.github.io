import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ScrollProgressBar({ scrollPercentage }) {
  return (
    <ProgressBar now={scrollPercentage} />
  );
}

export default ScrollProgressBar;
