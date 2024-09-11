import React, {useState } from "react";

const Loginsign = () => {
  const [action,setAction]=useState("Login");

  return(
    <div  className="container">
      
      <div  className="header">
        <div  className="text">{action}</div>
        <div  className="underline"></div>
      </div>
   
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
        <img src="./icons/persoon.jfif" alt="user_icon" className="image" />
          <input  type="text" 
                  id="username"  
                  placeholder="Name"/>
        </div>}

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
        {action==="Login"?<div></div>:<div className="input">
         <img src="./icons/lockk.png" alt="lock_icon" className="image" /> 
          <input  type="password" placeholder="Confirm Password" />
        </div>}
      </div>
      {action==="Login"?<div></div>:<div className="remember">
          <input type="checkbox" name="" id="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label>
      </div>}



      {action==="Sign Up"?<div></div>:<div className="forget" type="link" ><span>Forgot Pasword?</span></div>}
      
      <div className="buttons">
      {action==="Sign Up"?<div></div>:<div className="button">Login</div>}
      {action==="Login"?<div></div>:<div className="button">Sign Up</div>}

      </div>
      <div  className="msg">

        {action==="Sign Up"?<div></div>:<div className="Sign Up">New Here?<span className="to" type="link" onClick={()=>{setAction('Sign Up')}}>Create an Account!</span></div>}
        {action==="Login"?<div></div>:<div className="Login">Already have an Account?<span className="to" type="link" onClick={()=>{setAction('Login')}}>Login</span></div>}
      </div>

      </div>


  );
};


export default Loginsign;
