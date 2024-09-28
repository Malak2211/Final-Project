import React, { useState, useRef } from "react";
import '../styles/ingred.css';

const Getrecipe = () => {
  const [ingredients, setIngredients] = useState(""); 
  const newName = useRef("");
  const [recipeData, setRecipeData] = useState(null);  
  const [error, setError] = useState(null);  

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    newName.current = ingredients;
    console.log(`Fetching the recipe of ${newName.current}`); 
    await getResponse(newName.current); 
  };

  function humanize(recipe){
    let newString = recipe.replace(/\\n/g, '\n');
    newString = newString.replace(/"/g, ' ');
    return newString
  }

  const getResponse = async (value) => {
    try {
      const response = await fetch('http://localhost:8000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
message: `Provide a detailed description of the dish ${value} with ingredients and instructions, but use plain text formatting without any Markdown symbols like ## or **`

        }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      let rawText = await response.text();
      rawText = humanize(rawText)
      const recipeSteps = rawText.split('.').filter(step => step.trim() !== ''); 
      setRecipeData(recipeSteps);
      console.log(`Recipe: ${rawText}`);
    } catch (error) {
      setError('Error fetching or parsing JSON');
    }
  };

  return (
    <div className="Finder_container">
      <div className="input_container">
        <form className="bar" onSubmit={handleSubmit}>
          <input
            className="searchbar"
            placeholder="Enter Ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)} 
          />
          <button type='submit' className='search_btn'>Fetch Recipe</button>
        </form>
      </div>

      <div className="output_container">
        {error && <p className="error_message">{error}</p>}
        {recipeData && (
          <div className="recipe_output">
            <h2>Recipe</h2>
            <div className="recipe_card">
              {recipeData.map((step, index) => (
                <p key={index}>{step.trim()}.</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Getrecipe;
