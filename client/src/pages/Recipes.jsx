import React from 'react';


function RecipeApp() {


  return (
    <div className='Finder_container'>
      <h1 className='header'>Recipe Finder</h1>
      <input
        type="text"
        placeholder="Enter ingredients"
        className='ingredient'
      />
      <button className='Getrecipe'>Get Recipe</button>
    </div>
  )};

export default RecipeApp;
