import React, {useState} from 'react';
import Plus from '../../assets/plus.svg';
import Minus from '../../assets/minus.svg';

import './Target.css';

const Target = ({currVal, newVal, userId}) => {
  const [target, setTarget] = useState(currVal || 1000);

  const incrementHandler = () => {
    setTarget((prevVal) => prevVal + newVal);
    // newData();
  };

  const decrementHandler = () => {
    setTarget((prevVal) => (prevVal > 0.5 ? prevVal - newVal : 0));
    // newData();
  };

  // const newData = useCallback(async () => {
  //   try {
  //     await fetch(`http://localhost:5000/api/users/${userId}`, {
  //       method: 'PUT',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({stepsTarget: target, userId: userId}),
  //     });
  //   } catch (err) {}
  // }, [target, userId]);

  // const updateSteps = useCallback(async () => {
  //   try {
  //     await fetch(`http://localhost:5000/api/home/${data.userId}/steps`, {
  //       method: "PUT",
  //       body: JSON.stringify({ stepsTarget: steps, id: data.userId }),
  //       headers: { "Content-Type": "application/json" },
  //     });
  //   } catch (err) {}
  // }, [steps, data.userId]);

  // const stepIncrementHandler = () => {
  //   setSteps((prevSteps)=>(Number(prevSteps) + 0.5).toFixed(1));
  //   updateSteps();
  // };

  
  return (
    <div className="target">
      <button onClick={incrementHandler}>
        <img src={Plus} alt="increase" />
      </button>
      <span>
        <h2>{target / 1000}k</h2>
        <p style={{letterSpacing: '1px'}}>target</p>
      </span>
      <button onClick={decrementHandler}>
        <img src={Minus} alt="decrease" />
      </button>
    </div>
  );
};

export default Target;
