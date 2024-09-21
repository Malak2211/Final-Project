import React, { useState } from 'react';
import '../styles/Meals.css'; 
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const meals = [
  {
    Name: "Spaghetti Carbonara",
    Country: "Italy",
    Calories: 600,
    Ingredients: [
      "Spaghetti",
      "Eggs",
      "Pancetta",
      "Parmesan cheese",
      "Black pepper"
    ],
    Recipe: "Cook spaghetti. In a bowl, whisk eggs and cheese. Fry pancetta until crisp. Toss cooked pasta with pancetta, then mix in egg-cheese mixture. Serve immediately with extra cheese and pepper.",
    image_url: "https://media.istockphoto.com/id/1142391463/photo/pasta-carbonara.jpg?s=612x612&w=0&k=20&c=7gO9mReNFzY10qsmu_X4_LZ45-UcVPtzpHF-DOFp6Cc="
  },
  {
    Name: "Chicken Tikka Masala",
    Country: "India",
    Calories: 700,
    Ingredients: [
      "Chicken",
      "Yogurt",
      "Tomatoes",
      "Garlic",
      "Ginger",
      "Spices (garam masala, cumin, coriander)",
      "Cream"
    ],
    Recipe: "Marinate chicken in yogurt and spices. Grill until cooked. Simmer tomatoes, garlic, ginger, and spices to create sauce. Add grilled chicken and cream. Serve with rice or naan.",
    image_url: "https://media.istockphoto.com/id/1227594550/photo/chicken-curry-creamy-chicken-butter.jpg?s=612x612&w=0&k=20&c=U9SzDx7mjCA5iS1qb8cDUNNkIGD6mJJhwLvEHXL-OlE="
  },
  {
    Name: "Sushi",
    Country: "Japan",
    Calories: 300,
    Ingredients: [
      "Sushi rice",
      "Nori (seaweed)",
      "Raw fish (e.g., tuna, salmon)",
      "Vegetables (e.g., cucumber, avocado)",
      "Soy sauce",
      "Wasabi"
    ],
    Recipe: "Cook sushi rice. Lay a nori sheet flat, spread rice, and add fish and vegetables. Roll tightly, then slice. Serve with soy sauce and wasabi.",
    image_url: "https://media.istockphoto.com/id/1053854126/photo/all-you-can-eat-sushi.jpg?s=612x612&w=0&k=20&c=qqPJBYcxR0fgmzIFj_k2V6Mbo12hBBCucs1i5HcGYA0="
  }
];
      
function Meals(){
  const [choose , setChoose] = useState('');
  const [search , setSearch] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/meals', {search , choose})
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
            <option value="country">All</option>
            <option value="country">India</option>
            <option value="country">Italy</option>
            <option value="country">Jaban</option>
          </select>
      </div>
      </form>
      <div className='meals_container'>
        {meals.map((meal, index) => (
          <div className='meal_card' key={index}>
            <img src={meal.image_url} alt={meal.Name} className="meal_image" />
            <div className='meal_info'>
              <p><span className='meal_label'>Name:</span> {meal.Name}</p>
              <p><span className='meal_label'>Country:</span> {meal.Country}</p>
              <p><span className='meal_label'>Calories:</span> {meal.Calories}</p>
              <p><span className='meal_label'>Ingredients:</span> {meal.Ingredients.join(', ')}</p>
              <p><span className='meal_label'>Recipe:</span> {meal.Recipe}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='meals_container'>
        {meals.map((meal, index) => (
          <div className='meal_card' key={index}>
            <img src={meal.image_url} alt={meal.Name} className="meal_image" />
            <div className='meal_info'>
              <p><span className='meal_label'>Name:</span> {meal.Name}</p>
              <p><span className='meal_label'>Country:</span> {meal.Country}</p>
              <p><span className='meal_label'>Calories:</span> {meal.Calories}</p>
              <p><span className='meal_label'>Ingredients:</span> {meal.Ingredients.join(', ')}</p>
              <p><span className='meal_label'>Recipe:</span> {meal.Recipe}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Meals;


