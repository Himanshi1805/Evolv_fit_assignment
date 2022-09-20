import React from 'react';
import './Title.css';
import StepsImg from '../assets/steps.png';
import WorkoutImg from '../assets/workout.png';
import NutritionImg from '../assets/nutrition.png';

const Title = () => {
    return (
        <div className='title'>
            <div className='heading'>
            <img src ={StepsImg} alt='Steps' />
            Steps</div>
            <div className='heading'><img src ={WorkoutImg} alt='Workout' />Workout</div>
            <div className='heading'><img src ={NutritionImg} alt='Nutrition' />Nutrition</div>
        </div>
    );
};

export default Title;