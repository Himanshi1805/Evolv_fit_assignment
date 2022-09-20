import React, {useState} from 'react';
import './NutritionData.css';
import {PieChart} from 'react-minimal-pie-chart';
import Arrow from '../../assets/arrow.svg';
import Target from './Target';
import {Link} from 'react-router-dom';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Tooltip from "./Tooltip";


const NutritionData = ({index, loadedUsers}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const userId = loadedUsers[index].userId;
  const proteinConsumed = loadedUsers[index].proteinConsumed;
  const proteinTarget = loadedUsers[index].proteinTarget;
  const fatConsumed = loadedUsers[index].fatConsumed;
  const fatTarget = loadedUsers[index].fatTarget;
  const carbConsumed = loadedUsers[index].carbConsumed;
  const carbTarget = loadedUsers[index].carbTarget;
  const calorieIntake = loadedUsers[index].calorieIntake;
  const calorieTarget = loadedUsers[index].calorieTarget;

  const totalConsumed = proteinConsumed + fatConsumed + carbConsumed;

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

  return (
    <div className="nutrition">
    <Tippy visible={showTooltip} placement="bottom" content={<Tooltip macros={macros} />}>
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
      <Target currVal={calorieTarget} newVal={100} />

      <Link to={`/${userId}/nutrition`}>
        <button className="arrow">
          <img src={Arrow} alt="arrow" />
        </button>
      </Link>
    </div>
  );
};

export default NutritionData;
