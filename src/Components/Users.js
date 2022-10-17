import React, {useState} from 'react';
import './Users.css';
import ProfileImg from '../assets/profile.png';
import StepsData from './UserData/StepsData';
import WorkoutData from './UserData/WorkoutData';
import NutritionData from './UserData/NutritionData';
import Bell from '../assets/bell.png';
import arrow from '../assets/arrow.svg';
import steps from '../assets/steps.png';
import workout from '../assets/workout.png';
import nutrition from '../assets/nutrition.png';

const Users = ({index, loadedUsers, windowWidth}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownToggler = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="users">
<div className="user" onClick={dropdownToggler}>
<img className="user-img" src={ProfileImg} alt="Profile" />
      <div className="info">

        { loadedUsers && <h3>{loadedUsers[index].name}</h3>}

       { loadedUsers && <p className="email">{loadedUsers[index].email}</p>}
      </div>
      {windowWidth <= 995 && (
          <img
            src={arrow}
            className={`"dropdown" ${
              dropdownOpen ? "open" : ""
            }`}
            alt="dropdown"
          />
        )}
</div>
 {(windowWidth > 995 || dropdownOpen) && (
        <>
        {windowWidth <= 995 && (
            <div className="segment">
              <div className="heading">
                <img src={steps} alt="icon" />
                <p>Steps</p>
              </div>
            </div>
          )}
      {loadedUsers && <StepsData index={index} loadedUsers={loadedUsers} />}
      {windowWidth <= 995 && (
            <div className="segment">
              <div className="heading">
                <img src={workout} alt="icon" />
                <p>Workout</p>
              </div>
            </div>
          )}
      {loadedUsers && <WorkoutData index={index} loadedUsers={loadedUsers} />}
      {windowWidth <= 995 && (
            <div className="segment">
              <div className="heading">
                <img src={nutrition} alt="icon" />
                <p>Nutrition</p>
              </div>
            </div>
          )}
      {loadedUsers && <NutritionData index={index} loadedUsers={loadedUsers} isMobile={windowWidth <= 995} />}
    

      <button className="bell">
        <img className="bell-img" src={Bell} alt="bell" />
      </button>
      </>
 )}
    </div>
  );
};

export default Users;
