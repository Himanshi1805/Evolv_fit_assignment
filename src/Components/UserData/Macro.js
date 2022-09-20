import React from 'react';

import './Macros.css';
const Macro = ({value}) => {
  const {name, target, consumed, color} = value;

  const percentage = (consumed / target) * 100;
  return (
    <div className="container-tippy">
      <div className="details">
        <p>{name}</p>
        <p>{target}g</p>
      </div>

      <div className="progressBar">
        <div
          style={{
            width: `${percentage}%`,
            backgroundColor: `${color}`,
          }}
        ></div>
        <p>{consumed}g</p>
      </div>
    </div>
  );
};

export default Macro;
