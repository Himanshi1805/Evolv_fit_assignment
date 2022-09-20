import React from 'react';
import './Users.css';
import ProfileImg from '../assets/profile.png';
import StepsData from './UserData/StepsData';
import WorkoutData from './UserData/WorkoutData';
import NutritionData from './UserData/NutritionData';
import Bell from '../assets/bell.png';

const Users = ({index, loadedUsers}) => {

  return (
    <div className="users">
      <img className="user-img" src={ProfileImg} alt="Profile" />

      <div className="info">
        { loadedUsers && <h3>{loadedUsers[index].name}</h3>}

       { loadedUsers && <p className="email">{loadedUsers[index].email}</p>}
      </div>

      {loadedUsers && <StepsData index={index} loadedUsers={loadedUsers} />}
      {loadedUsers && <WorkoutData index={index} loadedUsers={loadedUsers} />}
      {loadedUsers && <NutritionData index={index} loadedUsers={loadedUsers} />}
    

      <button className="bell">
        <img className="bell-img" src={Bell} alt="bell" />
      </button>
    </div>
  );
};

export default Users;
