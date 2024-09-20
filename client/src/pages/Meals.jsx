import React, { useState } from 'react';
import '../styles/Meals.css'; 
import axios from "axios";
import { useNavigate } from 'react-router-dom';


// const cohere = new CohereClient({
//     token: "Z7ZNvsIBPGsntSEDJTpJfSNrGaDJC7B14W2HZLoe",
//   });
  
  // (async () => {
    //   const response = await cohere.chat({
      //     message: "10 meals around the world",
      //   });
      
      //   console.log(response);
      // })();
      
function Meals(){
  // const { CohereClient } = require("cohere-ai");
  const [choose , setChoose] = useState('');
  const [search , setSearch] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', {search , choose})
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/login');
        }
      })
      .catch(err => console.log(err));
  };
  return(
    <div >
      <form onSubmit={handleSubmit} className="meals_inputs">
      <div className="meal_input" style={{alignItems:"center",justifyContent:'center'}}>
          <h3>Filter:</h3>
          <select className="meal-select" id="choosing" value={choose} onChange={(e) => setChoose(e.target.value)} required>
            <option value="country">Egypt</option>
            <option value="country">China</option>
          </select>
      </div>
      </form>
      <div className='meal_container'>
        <div className='meal_img'></div>
        <div className='meal_info'>
          <p style={{fontSize:22}}><span style={{fontWeight: 'bold'}}>Name:</span>Som Tam</p>
          <p style={{fontSize:22}}><span style={{fontWeight: 'bold'}}>Country:</span>China</p>
          <p style={{fontSize:22}}><span style={{fontWeight: 'bold'}}>Calories:</span>50</p>
          <p style={{fontSize:22}}><span style={{fontWeight: 'bold'}}>Ingredients:</span>ghj,dfgh,dfghj,dfghj</p>
          <p style={{fontSize:22}}><span style={{fontWeight: 'bold'}}>Reipe:</span>Somesrdtfyguhij</p>
        </div>
        </div>
      </div>
  )
}

export default Meals;

