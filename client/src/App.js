import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Meals from './pages/Meals';
import Calories from './pages/Calories';    
import SuggestPlan from './pages/SuggestPlan'; 
import SleepCycleTracker from './pages/SleepCycleTracker';
import Exercises from './pages/Exercises';   
import Gif from './pages/gif';
import Sleeptracker from './pages/Sleeptracker'; 
import Login from './Items/Login';
import Signup from './Items/Signup';
import Addingred from './pages/getingred'
import Addrecipe from './pages/Addrecipe'
import FoodOfTheDay from './pages/suggesttt'
import ProtectedRoute from './components/ProtectedRoute'; 
import Ingcards from './pages/ingredcards'
import './styles/recipe.css'
import './styles/ingred.css'
import './styles/designforlogin.css';
import './styles/designforsignup.css';
import'./styles/App.css';
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
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Main application routes (protected) */}
            <Route path="/home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } /> 
            <Route path="/meals" element={
              <ProtectedRoute>
                <Meals />
              </ProtectedRoute>
            } />
            <Route path="/calories" element={
              <ProtectedRoute>
                <Calories />
              </ProtectedRoute>
            } />
            <Route path="/suggest-plan" element={
              <ProtectedRoute>
                <SuggestPlan />
              </ProtectedRoute>
            } />
            <Route path="/exercises" element={
              <ProtectedRoute>
                <Exercises />
              </ProtectedRoute>
            } />
            <Route path="/tracker" element={
              <ProtectedRoute>
                <SleepCycleTracker />
              </ProtectedRoute>
            } />
            <Route path="/ingred" element={
              <ProtectedRoute>
                <Addingred />
              </ProtectedRoute>
            } />
            <Route path="/recipe" element={
              <ProtectedRoute>
                <Addrecipe />
              </ProtectedRoute>
            } />
            <Route path="/gif" element={
              <ProtectedRoute>
                <Gif />
              </ProtectedRoute>
            } />
            <Route path="/cards" element={
              <ProtectedRoute>
                <Ingcards />
              </ProtectedRoute>
            } />
            <Route path="/suggest" element={
              <ProtectedRoute>
                <FoodOfTheDay />
              </ProtectedRoute>
            } />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
