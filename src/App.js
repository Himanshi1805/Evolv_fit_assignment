import Container from './Components/Container';
import UserDetail from './Components/UserDetail';
import {Route, Navigate, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Container />} />
        <Route
          path="/:userId/workout"
          element={<UserDetail title="Workout" />}
        />
        <Route
          path="/:userId/nutrition"
          element={<UserDetail title="Nutrition" />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
