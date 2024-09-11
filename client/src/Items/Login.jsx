import React from "react";

const Login = () => {

  return(
    <div  className="container">
      
      <div  className="header">
        <div  className="text">Login</div>
        <div  className="underline"></div>
      </div>
   
      <div className="inputs">


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
      </div>


      <div className="forget" type="link" ><span>Forgot Pasword?</span></div>

      
      <div className="buttons">
      <div className="button">Login</div>

      </div>
      <div  className="msg">

        <div className="Sign Up">New Here?<span className="to" type="link" >Create an Account!</span></div>
      </div>

      </div>


  );
};


export default Login;
