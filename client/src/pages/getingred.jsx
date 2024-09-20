import React from 'react';
import '../styles/ingred.css'

function Ingred() {


  return (
    <div className='Finder_container'>
      <h1 className='header'>Add your Recipes</h1>
      <input
        type="text"
        placeholder="Enter ingredients"
        className='ingredient'
      />
      <button className='Getrecipe'>Add</button>
    </div>
  )};

export default Ingred;
