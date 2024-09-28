import React, { useState , useEffect} from 'react';
import '../styles/Meals.css'; 
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 
import {useRef} from "react";


function Meals() {
  const [meals, setMeals] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const dummyNum = useRef(0)  
  let click = false;
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue); 
    getResponse(inputValue)
  };
  
  useEffect(() => {
    if (dummyNum.current === 0)
    {
      getResponse('all countries')
      console.log('test')
    }
      dummyNum.current = 5
  }, []);
  const getResponse = async (country) => {
    try {
      const response = await fetch('http://localhost:8080/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `I need json list of 3 meals from ${country} each have(name,country,calories,ingredients,recipe) without 'Here's a JSON list' prefix.`
        }),
      });
  
      const rawText = await response.text();
      try {
        const data = JSON.parse(rawText);
        console.log('Parsed JSON:', data);
        const data2 = JSON.parse(data);
        console.log(data2)
        setMeals(data2); 
        // localStorage.setItem(country , data2)
        localStorage.setItem(country, JSON.stringify(data2));
        // localStorage.setItem('name' , 'miral')
        const retrievedData = JSON.parse(localStorage.getItem(country));
        console.log(retrievedData);
        
        // console.log(localStorage.getItem('name'))
      } catch (jsonError) {
        console.error('Error parsing JSON:', jsonError);  
      }
    } catch (error) {
      console.error('Error fetching or parsing JSON:', error);  
    }
  };

  
  return (
    <div>

      <form onSubmit={handleSubmit} className="meals_inputs">
      <div className="meal_input" style={{alignItems: "center", justifyContent: 'center'}}>
        <input 
          type="text" 
          placeholder="Enter Country Name" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter")
              setInputValue(e.target.value)
            }}
        />
        <button type="submit">Submit</button>
      </div>
    </form>




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
      <button onClick={getResponse}>More</button>
    </div>
  );
}

export default Meals;
