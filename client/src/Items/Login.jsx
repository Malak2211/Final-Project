import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from "axios";
import '../styles/designforlogin.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/login', { email, "pwd": pwd })
      .then(result => {
        console.log(result);
        if (result.status === 200) {
          localStorage.setItem('token', result.data.token);
          navigate('/home');
        }
      })
      .catch(err => console.log(err));
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login_container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit} className="inputs">
        <div className="input">
          <img src="./icons/mail.png" alt="email_icon" className="image" />
          <input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="input">
          <img src="./icons/lockk.png" alt="lock_icon" className="image" />
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>

        <div className="forget" type="link">
          <span>Forgot Password?</span>
        </div>

        <div className="buttons">
          <Button type="submit" className="button">Login</Button>
        </div>
      </form>

      <div className="msg">
        <div className="Sign Up">
          New Here?
          <span onClick={goToSignup} className="navigatetosignup" type="link">
            Create an Account!
          </span>
        </div>
        
      </div>
    </div>
    
  );
};

export default Login;
