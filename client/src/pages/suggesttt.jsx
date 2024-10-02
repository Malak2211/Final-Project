import React, { useEffect, useState } from 'react';
import './suggestttt.css';
const foodSchedule = {
  Monday: {
    description: "Mexican Watermelon Salad: This Mexican watermelon salad recipe with tajin, Cotija cheese, and cilantro is a delightful, refreshing dish!",
    image: "https://thishealthytable.com/wp-content/uploads/2021/07/mexican-watermelon-salad.jpg"
  },
  Tuesday: {
    description: "Mediterranean Salmon Salad: Tender salmon combines with crisp Romaine lettuce, juicy tomatoes and cucumbers, and much more for a delicious Mediterranean salmon salad recipe.",
    image: "https://thishealthytable.com/wp-content/uploads/2021/08/mediterranean-salmon-salad-recipe.jpg"
  },
  Wednesday: {
    description: "Endive Salad Bites with Grilled Feta: These delicious endive salad bites have citrus, grilled feta, toasted nuts, fresh herbs, and pomegranate seeds. It's all of winter's best produce in one dish!",
    image: "https://thishealthytable.com/wp-content/uploads/2020/12/endive-salad-bites-17-of-21.jpg"
  },
  Thursday: {
    description: "Roasted Chickpea Salad Recipe: This delicious chickpea salad is full of flavor and is easy to make.",
    image: "https://thishealthytable.com/wp-content/uploads/2020/07/Roasted-Chickpea-Salad-1-of-6.jpg"
  },
  Friday: {
    description: "Citrus Fennel Salad Recipe: This citrus fennel salad is a wonderful winter salad recipe. It combines grapefruit, Cara Cara oranges, blood oranges, fennel, and mozzarella into a delicious and bright fruit salad.",
    image: "https://thishealthytable.com/wp-content/uploads/2020/01/orange-fennel-salads-1024x1536.jpg"
  },
  Saturday: {
    description: "Citrus Berry Spinach Salad: This juicy citrus and berry salad hits all the right flavor notes! It's easy to pull together and is super refreshing.",
    image: "https://thishealthytable.com/wp-content/uploads/2024/04/strawberry-citrus-salad.jpg"
  },
  Sunday: {
    description: "Easy Tomato Salad with Tarragon Pesto: This bright, easy tomato salad is topped with a basil tarragon pesto and toasted pine nuts. It's truly delightful! This will be one of your favorite summer side dishes.",
    image: "https://thishealthytable.com/wp-content/uploads/2018/05/tomato-tarragon-pesto-salad-3-of-3-1020x1536.jpg"
  }
};

const FoodOfTheDay = () => {
  const [food, setFood] = useState(null);

  useEffect(() => {
    const today = new Date().toLocaleString('en-us', { weekday: 'long' });
    setFood(foodSchedule[today]);
  }, []); 

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Food of the Day</h1>
      <p>Today is {new Date().toLocaleDateString('en-us', { weekday: 'long' })}, so enjoy some food!</p>
      <p>{food.description}</p>
      {food.image && <img src={food.image} alt="Food of the day" style={{ width: '300px', height: 'auto' }} />}
    </div>
  );
};

export default FoodOfTheDay;