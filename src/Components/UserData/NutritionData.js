import React, {useState, useCallback} from 'react';
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";
import './NutritionData.css';
import {PieChart} from 'react-minimal-pie-chart';
import Arrow from '../../assets/arrow.svg';
import Target from './Target';
import {Link} from 'react-router-dom';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Tooltip from "./Tooltip";


const NutritionData = ({index, loadedUsers,isMobile}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const userId = loadedUsers[index].id;
  const proteinConsumed = loadedUsers[index].proteinConsumed;
  const proteinTarget = loadedUsers[index].proteinTarget;
  const fatConsumed = loadedUsers[index].fatConsumed;
  const fatTarget = loadedUsers[index].fatTarget;
  const carbConsumed = loadedUsers[index].carbConsumed;
  const carbTarget = loadedUsers[index].carbTarget;
  const calorieIntake = loadedUsers[index].calorieIntake;
  const calorieTarget = (loadedUsers[index].calorieTarget)/1000;

  const totalConsumed = proteinConsumed + fatConsumed + carbConsumed;
  const [calories, setCalories] = useState(calorieTarget);
  const macros = [
    {
      name: "PROTEIN",
      target: proteinTarget,
      consumed: proteinConsumed,
      color: "#F45C84",
    },
    {
      name: "FATS",
      target: fatTarget,
      consumed: fatConsumed,
      color: "#03C6FA",
    },
    {
      name: "CARBS",
      target: carbTarget,
      consumed: carbConsumed,
      color: "#F0C50F",
    },
  ];

  const newData = useCallback(async () => {
    try {
      await fetch(`http://localhost:5000/api/users/${userId}/calories`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ calorieTarget: calories, userId: userId }),
      });
    } catch (err) {}
  }, [calories, userId]);

  const incrementHandler = () => {
    setCalories((Number(calories) + Number(0.5)).toFixed(1));
    newData();
  };

  const decrementHandler = () => {
    if (calories > 0.5) {
      const newCalories = calories - 0.5;
      setCalories(newCalories);
    } else {
      setCalories(0);
    }
    newData();
  };


  return (
    <div className="nutrition">
    <Tippy visible={showTooltip} placement={`${isMobile ? "right" : "bottom"}`} content={<Tooltip macros={macros} />}>
        <span
          onMouseOver={() => setShowTooltip(true)}
          onMouseOut={() => setShowTooltip(false)}
        >
      
        <PieChart
          className="piechart"
          animate={true}
          animationEasing="ease-out"
          totalValue={1}
          data={[
            {
              title: 'Carbs',
              value: carbConsumed / totalConsumed,
              color: '#F0C50F',
            },
            {
              title: 'Fats',
              value: fatConsumed / totalConsumed,
              color: '#03C6FA',
            },
            {
              title: 'Protein',
              value: proteinConsumed / totalConsumed,
              color: '#F45C84',
            },
          ]}
          lineWidth={27}
          label={() => calorieIntake}
          labelStyle={{
            fontSize: '20px',
            fontFamily: 'Montserrat',
            fontWeight: 700,
            lineHeight: '15px',
            fill: '#ffffff',
          }}
          labelPosition={0}
        />

        <p className="calorie">calorie</p>
      </span>
       </Tippy> 
       <div className="target">
        <button onClick={incrementHandler}>
          <img src={Plus} alt="increase" />
        </button>
        <span>
          <h2>{calories}k</h2>
          <p style={{ letterSpacing: "1px" }}>target</p>
        </span>
        <button onClick={decrementHandler}>
          <img src={Minus} alt="decrease" />
        </button>
      </div>
  
      <Link to={`/${userId}/nutrition`}>
        <button className="arrow">
          <img src={Arrow} alt="arrow" />
        </button>
      </Link>
    </div>
  );
};

export default NutritionData;
