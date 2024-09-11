import React from 'react';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };
    return(
        <div  className="container">
      
        <div  className="header">
          <div  className="text">Sign Up</div>
          <div  className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
            <img src="./icons/persoon.jfif" alt="user_icon" className="image" />
            <input  type="text" 
                    id="username"  
                    placeholder="Name"/>
            </div>
            <div className="input">
            <img src="./icons/email.png" alt="email_icon" className="image" />
            <input type="email" placeholder="Email id" />
            </div>
            <div className="input">
            <img src="./icons/lockk.png" alt="lock_icon" className="image" /> 
            <input  type="password" 
                    placeholder="Password"
                    id="password"/> 
            </div>
            <div className="input">
            <img src="./icons/lockk.png" alt="lock_icon" className="image" /> 
            <input  type="password" placeholder="Confirm Password" />
            </div>
        </div>
        <div className="remember">
            <input type="checkbox" name="" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <div className="buttons">
            <div className="button">Sign Up</div>

      </div>
        <div  className="msg">
                <div className="Login">Already have an Account?<span onClick={goToLogin}className="to" type="link">Login</span></div>
        </div>
        </div>
    );
};
export default Signup;




    