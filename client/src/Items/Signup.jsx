import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/designforsignup.css';

const Signup = () => {
  const navigate = useNavigate();
  const[name,setName] = useState()
  const[email,setEmail] = useState()
  const[pwd,setPwd] = useState()
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:8080/api/signup',{name,email,pwd:pwd})
    .then(result => {
      console.log(result);
      if (result.data === "Success") {
        alert('Check mail for verification')
      }
    })
    .catch(err => console.log(err));
  }
  

  const goToLogin = () => {
    navigate("/login");
  };
    return(
        <div  className="signup_container">
      
        <div  className="header">
          <div  className="text">Sign Up</div>
          <div  className="underline"></div>
        </div>
        <form onSubmit={handleSubmit} className="inputs">
            <div className="input">
            <img src="./icons/image.png" alt="user_icon" className="image" />
            <input  type="text" 
                    id="username"  
                    placeholder="  Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="input">
            <img src="mail.png" alt="email_icon" className="image" />
            <input type="email" 
                    placeholder="  Email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input">
            <img src="./icons/lockk.png" alt="lock_icon" className="image" /> 
            <input  type="password" 
                    placeholder="  Password"
                    id="password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}/> 
            </div>
        <div className="buttons">
            <Button type="submit" className="button">Sign Up</Button>
        </div>
      </form>
        <div  className="msg">
                <div className="Login">Already have an Account?<span onClick={goToLogin}className="navigatetologin" type="link">Login</span></div>
        </div>
        </div>
    );
};
export default Signup;




    