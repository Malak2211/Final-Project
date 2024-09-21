import React, { useState } from 'react';
import '../styles/Calories.css';
import { Container, Button } from 'react-bootstrap';

const Calories = () => {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [age, setAge] = useState('');
  const [exercise, setExercise] = useState('none');
  const [bmr, setBmr] = useState(0);
  const [tdee, setTdee] = useState(0);

  const calculateBMR = (e) => {
    e.preventDefault();

  
    const convertedHeight = heightUnit === 'in' ? height * 2.54 : height; 
    const convertedWeight = weightUnit === 'lb' ? weight * 0.453592 : weight; 
   
    let calculatedBMR;
    if (gender === 'male') {
      calculatedBMR = 88.36 + (13.4 * convertedWeight) + (4.8 * convertedHeight) - (5.7 * age);
    } else {
      calculatedBMR = 447.6 + (9.2 * convertedWeight) + (3.1 * convertedHeight) - (4.3 * age);
    }

    setBmr(calculatedBMR);
    const activityMultiplier = {
      none: 1.2,
      light: 1.375,
      moderate: 1.55,
      heavy: 1.725,
    };

    // Calculate TDEE
    const calculatedTDEE = calculatedBMR * activityMultiplier[exercise];
    setTdee(calculatedTDEE);
  };

  return (
    <Container className="calorie-container mt-5">
      <div className="row">
        <div className="col-md-6 form-section">
          <h1>BMR Calculator</h1>
          <form onSubmit={calculateBMR}>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select className="form-select" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="exercise" className="form-label">I exercise</label>
              <select className="form-select" id="exercise" value={exercise} onChange={(e) => setExercise(e.target.value)} required>
                <option value="none">None</option>
                <option value="light">1 to 3 times a week</option>
                <option value="moderate">3 to 5 times a week</option>
                <option value="heavy">6 to 7 times a week</option>
              </select>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="height" className="form-label">Height</label>
                <input type="number" placeholder='height' className="form-control" id="height" value={height} onChange={(e) => setHeight(e.target.value)} required />
              </div>
              <div className="col">
                <label htmlFor="height-unit" className="form-label">Unit</label>
                <select className="form-select" id="height-unit" value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
                  <option value="cm">cm</option>
                  <option value="in">in</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="weight" className="form-label">Weight</label>
                <input type="number" placeholder='weight' className="form-control" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
              </div>
              <div className="col">
                <label htmlFor="weight-unit" className="form-label">Unit</label>
                <select className="form-select" id="weight-unit" value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
                  <option value="kg">kg</option>
                  <option value="lb">lb</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age</label>
              <input type="number" placeholder='age' className="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
            </div>

            <Button type="submit" variant="dark">Calculate</Button>
          </form>
        </div>

        <div className="col-md-6 result-section">
          <h5>Your BMR is</h5>
          <div className="result-box">
            <span id="bmr-result">{bmr.toFixed(2)}</span> kcal
          </div>
          <h5>Your TDEE is</h5>
          <div className="result-box">
            <span id="tdee-result">{tdee.toFixed(2)}</span> kcal
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Calories;
