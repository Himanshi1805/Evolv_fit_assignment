import React, {useCallback, useState} from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import './StepsData.css';
import Plus from '../../assets/plus.svg';
import Minus from '../../assets/minus.svg';
// import Target from './Target';
import './Target.css';

const StepsData = ({index, loadedUsers}) => {

  const stepsWalked = loadedUsers[index].stepsWalked;
  const stepsTarget = (loadedUsers[index].stepsTarget)/1000;
  const [steps, setSteps]=useState(stepsTarget);
  const userId = loadedUsers[index].id;

  const newData = useCallback(async () => {
    try {
      await fetch(`http://localhost:5000/api/users/${userId}/steps`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({stepsTarget: steps, userId: userId}),
      });

    } catch (err) {}
  }, [steps, userId]);


  const incrementHandler = () => {
    setSteps((Number(steps)+Number(0.5)).toFixed(1));
    newData();
  };

  const decrementHandler = () => {
    if (steps > 0.5) {
      const newSteps = (steps - 0.5);
      setSteps(newSteps);
    } else {
      setSteps(0);
    }
    newData();
  };

  return (
    <div className="steps">
      <div style={{width: 70, height: 70, marginLeft: 70}}>
        <CircularProgressbarWithChildren
          value={stepsWalked}
          maxValue={steps*1000}
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
      <div className="target">
      <button onClick={incrementHandler}>
        <img src={Plus} alt="increase" />
      </button>
      <span>
        <h2>{steps}k</h2>
        <p style={{letterSpacing: '1px'}}>target</p>
      </span>
      <button onClick={decrementHandler}>
        <img src={Minus} alt="decrease" />
      </button>
    </div>

      {/* <Target currVal={stepsTarget} newVal={500}/> */}
    </div>
  );
};

export default StepsData;
