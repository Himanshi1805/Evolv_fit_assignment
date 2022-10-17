import React, {useState, useEffect, useCallback} from 'react';
import './Container.css';
import Title from './Title';
import Users from './Users';
const Container = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  const [loadedUsers, setLoadedUsers] = useState([]);

  const sendRequest = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users');

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setLoadedUsers(responseData.user);
      console.log(responseData.user);
      console.log(loadedUsers);
    } catch (err) {}
  }, []);

  useEffect(()=>{
      sendRequest();
  },[sendRequest]);


    return (
        <div className="container">
            {windowWidth >995 && <Title/>}
            {loadedUsers.map((user, index) => (
        
          <Users windowWidth={windowWidth} key={user.userId} index={index} loadedUsers={loadedUsers} />
        
            ))}
          
        </div>
    );
};

export default Container;