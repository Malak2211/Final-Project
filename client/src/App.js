import React from 'react';
import Login from './Items/Login';
import Signup from './Items/Signup';
import Home from './Items/home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Items/designforlogin.css';
import './Items/designforsignup.css';
import './Items/designforhome.css';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
