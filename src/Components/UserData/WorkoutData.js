import React from 'react';
import './WorkoutData.css';
import PDate from '../../assets/d1.png';
import TDate from '../../assets/date.svg';
import Arrow from '../../assets/arrow.svg';
import alarm from '../../assets/alarm.svg';
import {Link} from 'react-router-dom';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const WorkoutData = ({index, loadedUsers}) => {
  const userId = loadedUsers[index].id;
  const performedDate = new Date(loadedUsers[index].performedDate);
  const scheduledDate = new Date(loadedUsers[index].scheduledDate);
  const feedback = loadedUsers[index].feedback;
  // console.log(feedback);
  const currentDate = new Date();
  const alertState =
    currentDate.getDate() === scheduledDate.getDate() &&
    currentDate.getMonth() === scheduledDate.getMonth() &&
    currentDate.getFullYear() === scheduledDate.getFullYear();
  return (
    <div className="workout">
      <div className="date">
        <span>
          <img src={PDate} alt="PerformedDate" />
          <p>{`${performedDate.getUTCDate()} ${
            months[performedDate.getUTCMonth()]
          }`}</p>
        </span>
        <span className={`${alertState ? 'alert' : ''}`}>
          <img src={TDate} alt="TargetDate" />
          <p>{`${scheduledDate.getUTCDate()} ${
            months[scheduledDate.getUTCMonth()]
          }`}</p>
        </span>
      </div>
      <Link to={`/${userId}/workout`}><button className={`${feedback ? 'feedback_btn' : 'arrow'}`}>
        <img src={alertState ? alarm : Arrow} alt="arrow" />
        
      </button></Link>
      
    </div>
  );
};

export default WorkoutData;
