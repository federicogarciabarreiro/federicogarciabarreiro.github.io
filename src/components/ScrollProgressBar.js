import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ScrollProgressBar = ({ scrollPercentage }) => {
    const progressBarClass = scrollPercentage > 0 ? 'visible' : 'hidden';

    return (
        <div className={`progress-bar-container ${progressBarClass}`}>
            <ProgressBar now={scrollPercentage} />
        </div>
    );
};

export default ScrollProgressBar;
