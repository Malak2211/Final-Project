import React, { useEffect } from 'react';
import '../styles/recipe.css'; 

const AddRecipe = () => {
    const createRecipeElement = (recipe) => {
        const li = document.createElement('li');
        li.textContent = recipe;
        li.className = 'recipe-item';
        return li;
    };

    const saveRecipes = () => {
        const pendingRecipes = Array.from(document.querySelectorAll('#pendingRecipes li'))
            .map(recipe => recipe.textContent.trim());
        
        const completedRecipes = Array.from(document.querySelectorAll('#completedRecipes li'))
            .map(recipe => recipe.textContent.trim());
        
        localStorage.setItem('pendingRecipes', JSON.stringify(pendingRecipes));
        localStorage.setItem('completedRecipes', JSON.stringify(completedRecipes));
    };

    const loadRecipes = () => {
        const pendingRecipes = JSON.parse(localStorage.getItem('pendingRecipes') || '[]');
        const completedRecipes = JSON.parse(localStorage.getItem('completedRecipes') || '[]');

        pendingRecipes.forEach(recipe => {
            const element = createRecipeElement(recipe);
            document.getElementById('pendingRecipes').appendChild(element);
        });

        completedRecipes.forEach(recipe => {
            const element = createRecipeElement(recipe);
            element.classList.add('completed');
            document.getElementById('completedRecipes').appendChild(element);
        });
    };

    const deleteAll = () => { 
        document.getElementById('pendingRecipes').innerHTML = '';
        localStorage.removeItem('pendingRecipes');
    };

    useEffect(() => {
        loadRecipes();
    }, []);

    const addRecipe = () => {
        const recipeInput = document.getElementById('recipeInput');
        const inputRecipe = recipeInput.value.trim();
        
        if (inputRecipe === '') {
            alert('Please enter a recipe.');
            return;
        }
        
        const pendingRecipes = document.getElementById('pendingRecipes');
        const newRecipe = createRecipeElement(inputRecipe);
        pendingRecipes.appendChild(newRecipe);
        recipeInput.value = '';
    };

    return (
        <div className='finder-container'>
            <h1 className='header'>Recipe Finder</h1>
            <input
                type="text"
                id="recipeInput"
                placeholder="Enter recipe"
                className='input-recipe'
            />
            <button className='add-recipe-btn' onClick={addRecipe}>Add Recipe</button>
            <ul id="pendingRecipes" className='recipe-list'></ul>
            <ul id="completedRecipes" className='recipe-list'></ul>
        </div>
    );
};

export default AddRecipe;
