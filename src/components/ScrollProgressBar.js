import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ScrollProgressBar = ({ scrollPercentage }) => {
  return <ProgressBar now={scrollPercentage} />;
};

export default ScrollProgressBar;
