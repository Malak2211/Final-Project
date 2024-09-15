import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Meals from './pages/Meals';
import Calories from './pages/Calories';      // Import Calories component
import SuggestPlan from './pages/SuggestPlan'; // Import SuggestPlan component
import Exercises from './pages/Exercises';     // Import Exercises component

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/calories" element={<Calories />} />
        <Route path="/suggest-plan" element={<SuggestPlan />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </Router>
  );
};

export default App;
