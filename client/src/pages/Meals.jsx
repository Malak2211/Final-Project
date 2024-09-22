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
  },
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
    image_url: "https://plus.unsplash.com/premium_photo-1691948106030-d5e76d461b14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3BhZ2hldHRpJTIwQ2FyYm9uYXJhfGVufDB8fDB8fHww"
  },
  {
    Name: "Tacos al Pastor",
    Country: "Mexico",
    Calories: 500,
    Ingredients: [
      "Pork",
      "Pineapple",
      "Tortillas",
      "Onions",
      "Cilantro",
      "Lime",
      "Chili sauce"
    ],
    Recipe: "Marinate pork in chili sauce and grill. Slice thinly and serve in tortillas with pineapple, onions, cilantro, and lime.",
    image_url: "https://plus.unsplash.com/premium_photo-1681406994990-e16f7e02e027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGFjb3MlMjBhbCUyMFBhc3RvcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    Name: "Pad Thai",
    Country: "Thailand",
    Calories: 400,
    Ingredients: [
      "Rice noodles",
      "Shrimp or chicken",
      "Eggs",
      "Tofu",
      "Bean sprouts",
      "Peanuts",
      "Tamarind sauce"
    ],
    Recipe: "Stir-fry noodles with shrimp or chicken, eggs, tofu, and bean sprouts. Add tamarind sauce and top with crushed peanuts.",
    image_url: "https://images.unsplash.com/photo-1637806930600-37fa8892069d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBhZCUyMFRoYWl8ZW58MHx8MHx8fDA%3D"
  },
  {
    Name: "Falafel",
    Country: "Middle East",
    Calories: 350,
    Ingredients: [
      "Chickpeas",
      "Garlic",
      "Onions",
      "Parsley",
      "Cumin",
      "Coriander",
      "Flour"
    ],
    Recipe: "Blend chickpeas, garlic, onions, parsley, and spices. Form into balls, fry until golden. Serve with pita and tahini sauce.",
    image_url: "https://media.istockphoto.com/id/1692267770/photo/falafel-platter-with-tzatziki-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=0CpWYcVjWmu237Pa7XyCSDHxucPAR7GKYcMNPogJ_nI="
  },
  {
    Name: "Peking Duck",
    Country: "China",
    Calories: 900,
    Ingredients: [
      "Duck",
      "Hoisin sauce",
      "Scallions",
      "Cucumbers",
      "Mandarin pancakes"
    ],
    Recipe: "Roast duck until crispy. Serve with hoisin sauce, scallions, cucumbers, and mandarin pancakes for wrapping.",
    image_url: "https://media.istockphoto.com/id/918057036/photo/sliced-peking-duck-with-cucumber-green-onions-cilantro-and-wheaten-pancakes-with-sauce-hoysin.webp?a=1&b=1&s=612x612&w=0&k=20&c=mixyNFYv_VyURg6aQaIBkWxftSdGS3d3VfglwMfjHQA="
  },
  {
    Name: "Moussaka",
    Country: "Greece",
    Calories: 600,
    Ingredients: [
      "Eggplant",
      "Ground beef or lamb",
      "Tomatoes",
      "Onions",
      "Bechamel sauce",
      "Cheese"
    ],
    Recipe: "Layer fried eggplant with cooked beef or lamb in tomato sauce. Top with bechamel and cheese, then bake until golden.",
    image_url: "https://media.istockphoto.com/id/1649030858/photo/moussaka-a-traditional-greek-dish.webp?a=1&b=1&s=612x612&w=0&k=20&c=lc01ZcVXmdeSqVoAZUeQB-szw-VSP_tRpo0Z-fE6B94="
  }
];

const filtering = '';

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
    </div>
  )
}
export default Meals;


