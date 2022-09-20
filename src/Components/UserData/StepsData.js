import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import './StepsData.css';
import Target from './Target';

const StepsData = ({index, loadedUsers}) => {
  const stepsWalked = loadedUsers[index].stepsWalked;
  const stepsTarget = loadedUsers[index].stepsTarget;
  const userId = loadedUsers[index].userId;

  
  return (
    <div className="steps">
      <div style={{width: 70, height: 70, marginLeft: 70}}>
        <CircularProgressbarWithChildren
          value={stepsWalked}
          maxValue={stepsTarget}
          strokeWidth={11}
          counterClockwise={true}
          styles={buildStyles({
            strokeLinecap: 'butt',
            textColor: 'white',
            pathColor: '#7fd18c',
            trailColor: 'white',
          })}
        >
          <h4>{stepsWalked}</h4>
          <p>walked</p>
        </CircularProgressbarWithChildren>
      </div>

      <Target currVal={stepsTarget} newVal={500}/>
    </div>
  );
};

export default StepsData;
