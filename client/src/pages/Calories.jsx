import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/calories.css';  // Ensure this path is correct

const Calories = () => {
  const [caloriesBurned, setCaloriesBurned] = useState('');
  const [caloriesEaten, setCaloriesEaten] = useState('');
  const [result, setResult] = useState(0);

  const calculateCalories = () => {
    const burned = parseFloat(caloriesBurned) || 0;
    const eaten = parseFloat(caloriesEaten) || 0;
    const calculatedResult = eaten - burned;
    setResult(calculatedResult);
  };

  return (
    <div className="container">
    <div className="calculator-container">
      <h1>Calories Calculator</h1>
      <form>
       <div className="mb-3">
            <label htmlFor="caloriesBurned" className="form-label">
              Calories Burned:
          </label>
          <input
              type="number"
              className="form-control"
               placeholder="Enter"
              id="caloriesBurned"
              value={caloriesBurned}
              onChange={(e) => setCaloriesBurned(e.target.value)}
              aria-label="Calories burned"
              
            />
          </div>
          <div className="mb-3">
           <label htmlFor="caloriesEaten" className="form-label">
            Calories Eaten:
           </label>
            <input
             type="number"
           className="form-control"
           placeholder="Enter"
           id="caloriesEaten"
            value={caloriesEaten}
             onChange={(e) => setCaloriesEaten(e.target.value)}
            aria-label="Calories eaten"
            />
          </div>
         <button
            type="button"
          className="btn btn-primary"
           onClick={calculateCalories}
          >
           Calculate
     </button>
      </form>
      {result !== 0 && (
       <div className="result mt-3">
        <h2>Result: {result.toFixed(2)}</h2>
        </div>
        )}
      </div>
    </div>
  );
};

export default Calories;