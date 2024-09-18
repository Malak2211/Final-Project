
import React, { useState } from 'react';
import '../styles/Meals.css'; 
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Meals(){
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
    <div>
      <form onSubmit={handleSubmit} className="meals_inputs">
      <div className="meal_input">
          <h3>Search:</h3>
          <input
            type="searching"
            placeholder="search"
            id="searching"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
      </div>
      </form>
      <div className='meal_container'>
        <div className='meal_img'></div>
        </div>
        <div>
          <select className="meal-select" id="choosing" value={choose} onChange={(e) => setChoose(e.target.value)} required>
            <option value="country">country</option>
            <option value="name">name</option>
          </select>
        </div>
      </div>
  )
}

export default Meals;

