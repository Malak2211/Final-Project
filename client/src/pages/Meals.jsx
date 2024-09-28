import React, { useState, useEffect } from 'react';
import '../pages/Meals.css'; 
import { useNavigate } from 'react-router-dom'; 
import {useRef} from "react";

function text() {
  return '[{"name": "John","age": 30,"city": "New York"},{"name": "Jane","age": 25,"city": "San Francisco"},{"name": "Mike","age": 35,"city": "Chicago"}]'
}

function Meals() {
  const [meals, setMeals] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const dummyNum = useRef(0);

  // let meals = [];
  const newName = useRef("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue); 
    getResponse(inputValue)
  };

  useEffect(() => {
    if (dummyNum.current === 0) {
      getResponse('all countries');
      console.log('test');
    }
    dummyNum.current = 5;
  }, []);
  
  const filter = async (value) => {
        newName.current = value;
        console.log(newName.current);
        const response = await fetch('http://localhost:8080/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: `I need json list of meals from ${newName.current} each have(name,country,calories,ingredients,recipe) without 'Here's a JSON list' prefix.` 
            }),
          });
          const rawText = await response.text();
          try {
            setMeals (JSON.parse(rawText));
            console.log(meals);
          } catch (jsonError) {
            console.error('Error parsing JSON:', jsonError);  
          }
  };
  
  function setText(rawText) {
    try {
      const data = JSON.parse(rawText);
      console.log('Parsed JSON:', data);
      const data2 = JSON.parse(data);
      console.log(data2)
      setMeals(data2); 
      return data2;
    } catch (jsonError) {
      console.error('Error parsing JSON:', jsonError);  
    }
  }

  const getResponse = async (country) => {
    const cachedMeals = localStorage.getItem(country);
    if (cachedMeals) {
      let text_input = JSON.parse(cachedMeals);
      setMeals(text_input); 
      return;
    }

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
      let parsedData = setText(rawText);
      localStorage.setItem(country, JSON.stringify(parsedData));
      
    } catch (error) {
      console.error('Error fetching or parsing JSON:', error);  
    }
  };

  
  return (
    <div>
      {/* <button onClick={getResponse}>Fetch Meals</button> */}

      <form onSubmit={handleSubmit} className="meals_inputs">
      <div className="meal_input" style={{alignItems: "center", justifyContent: 'center'}}>
        <input 
          type="text" 
          className='meal'
          placeholder="Enter Country Name" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter")
              setInputValue(e.target.value);
          }}
        />
        
      </div>
      <button className='searching_button' type="submit">Submit</button>
    </form>




      <div className="meal_container">
        {meals.length === 0 ?(
          <p8>No meals available. Click the button to fetch meals.</p8>
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
