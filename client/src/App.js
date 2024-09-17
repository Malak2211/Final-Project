import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Meals from './pages/Meals';
import Calories from './pages/Calories';    
import SuggestPlan from './pages/SuggestPlan'; 
import Exercises from './pages/Exercises';     
import Login from './Items/Login';
import Signup from './Items/Signup';
// import Home from './Items/home';
import './Items/designforlogin.css';
import './Items/designforsignup.css';
// import './Items/designforhome.css';

// Helper component to conditionally render NavBar
const Layout = ({ children }) => {
  const location = useLocation();
  
  // Don't show NavBar on login/signup pages
  const hideNavBarRoutes = ["/", "/login", "/signup"];
  const shouldHideNavBar = hideNavBarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavBar && <NavBar />}
      {children}
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            {/* Authentication routes */}
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Main application routes */}
            <Route path="/home" element={<Home />} /> 
            <Route path="/meals" element={<Meals />} />
            <Route path="/calories" element={<Calories />} />
            <Route path="/suggest-plan" element={<SuggestPlan />} />
            <Route path="/exercises" element={<Exercises />} />
          </Routes>
        </Layout>
      </Router>
    </div>
    
  );
};

export default App;
