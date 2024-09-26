import React, { useState } from 'react';
import '../styles/Meals.css'; 
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 
import {useRef} from "react";

function Meals() {
  const [choose, setChoose] = useState('');
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);
  const newName = useRef("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/meals', { search, choose })
      .then(result => { 
        console.log(result);
        if (result.data === "Success") {
          navigate('/login');
        }
      })
      .catch(err => console.log(err));
  };
  // const filter = async (value) => {
  //       newName.current = value;
  //       console.log(newName.current);
  //       const response = await fetch('http://localhost:3001/generate', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           message: `I want the meals in ${newName} country` 
  //           }),
  //         });
  //         const rawText = await response.text();
  //     try {
  //       const data = JSON.parse(rawText);
  //       console.log('Parsed JSON:', data);
  //       const data2 = JSON.parse(data);
  //       console.log(data2)
  //       setMeals(data2);  
  //   } catch (error) {
  //     console.error('Error fetching or parsing JSON:', error);  
  //   }
  // };
  const getResponse = async () => {
    try {
      const response = await fetch('http://localhost:3001/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: "I need json list of 3 meals each have(name,country,calories,ingredients,recipe) without 'Here's a JSON list' prefix."
        }),
      });
  
      const rawText = await response.text();
      try {
        const data = JSON.parse(rawText);
        console.log('Parsed JSON:', data);
        const data2 = JSON.parse(data);
        console.log(data2)
        setMeals(data2); 
      } catch (jsonError) {
        console.error('Error parsing JSON:', jsonError);  
      }
    } catch (error) {
      console.error('Error fetching or parsing JSON:', error);  
    }
  };
  return (
    <div>
      <button onClick={getResponse}>Fetch Meals</button>
      {/* <form onSubmit={handleSubmit} className="meals_inputs">
      <div className="meal_input" style={{alignItems:"center",justifyContent:'center'}}>
          <h3>Filter:</h3>
          <select className="meal-select" id="choosing" onChange={(e)  => filter(e.target.value)} required>
            <option>All</option>
            <option>India</option>
            <option>Italy</option>
            <option>Japan</option>
          </select>
      </div>
      </form> */}
      <div className="meal_container">
        {meals.length === 0 ?(
          <p>No meals available. Click the button to fetch meals.</p>
        ) : (
          meals.map((item, index) => (
            <div className='meal_card' key={index}>
              <div className='meal_info'>
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Country:</strong> {item.country}</p>
                <p><strong>Calories:</strong> {item.calories}</p>
                <p><strong>Ingredients:</strong> {item.ingredients.join(', ')}</p>
                <p><strong>Recipe:</strong> {item.recipe}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Meals;
