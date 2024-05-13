import React from 'react';

function CustomButton ({ buttonLabel, buttonUrl }) {
  return (
    <div>
        <hr/>
        <a href={buttonUrl} className="btn btn-primary">{buttonLabel}</a>
    </div>  
  );
};

export default CustomButton;