import React from "react";
import {useNavigate} from 'react-router-dom'

const button = () => {
  const navigate = useNavigate();
  const gotogif  = () => {
    navigate("/gif.jsx");
  }
  return(
    <div className="button">
      <button></button>

    </div>
  )
};