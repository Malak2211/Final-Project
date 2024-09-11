import React from 'react';
import Login from './Items/Login';
import Signup from './Items/Signup';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Items/designforlogin.css';
import './Items/designforsignup.css';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
