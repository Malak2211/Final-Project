import React, { useState } from 'react';
import '../styles/Calories.css';
import { Container, Button } from 'react-bootstrap';

function humanize(recipe){
  let newString = recipe.replace(/\\n/g, '\n');
  newString = newString.replace(/"/g, ' ');
  return newString
}


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
  const [test, setTest] = useState(null);

  const getResponse = async () => {
    try {
      const response = await fetch('http://165.22.84.149:8080/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Generate a workout plan for a person who is ${age} years old, identifies as ${gender}, weighs ${weight} kilograms, and is ${height} centimeters tall. Their preferred exercise is ${exercise}.Please include warm-up, main exercises, and a cool-down session.  but use plain text formatting without any Markdown symbols like ## or **.`,
          
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      let rawText = await response.text();
      rawText = humanize(rawText);
      const testData = rawText.split('.').filter(step => step.trim() !== ''); 
      setTest(testData);
    } catch (error) {
      console.error('Error fetching or parsing JSON:', error);
      setTest(`Error: ${error.message}`);
    }
  };

  const calculateBMRAndTDEE = (e) => {
    e.preventDefault();

    if (age < 15 || age > 80) {
      alert('Age must be between 15 and 80.');
      return;
    }
    if (height < 1 || height > 300) {
      alert('Height must be between 1 and 300 cm.');
      return;
    }
    if (weight < 1 || weight > 180) {
      alert('Weight must be between 1 and 180 kg.');
      return;
    }

    const convertedHeight = heightUnit === 'in' ? height * 2.54 : height;
    const convertedWeight = weightUnit === 'lb' ? weight * 0.453592 : weight;

    let calculatedBMR;
    if (gender === 'male') {
      calculatedBMR = 88.36 + (13.4 * convertedWeight) + (4.8 * convertedHeight) - (5.7 * age);
    } else {
      calculatedBMR = 447.6 + (9.2 * convertedWeight) + (3.1 * convertedHeight) - (4.3 * age);
    }

    const activityMultiplier = {
      none: 1.2,
      light: 1.375,
      moderate: 1.55,
      heavy: 1.725,
    };
    const adjustedBMR = calculatedBMR * activityMultiplier[exercise];
    setBmr(adjustedBMR);

    const calculatedTDEE = adjustedBMR * 1.2; 
    setTdee(calculatedTDEE);

    handlePrintData(); 
  };

  const handlePrintData = () => {
    console.log("Button clicked!");
    console.log(`User Data:`);
    console.log(`- Gender: ${gender}`);
    console.log(`- Age: ${age}`);
    console.log(`- Height: ${height} ${heightUnit}`);
    console.log(`- Weight: ${weight} ${weightUnit}`);
    console.log(`- Exercise Level: ${exercise}`);
    console.log(`- BMR: ${bmr.toFixed(2)} kcal`);
    console.log(`- TDEE: ${tdee.toFixed(2)} kcal`);
  };
  console.log(test);
  return (
    <Container className="calorie-container2">
      <div className="row">
        <div className="col-md-6 form-section">
          <h1>BMR & TDEE Calculator</h1>
          <div className="info-section">
            <p>
              <strong>BMR</strong> (Basal Metabolic Rate) represents the number of calories your body needs to maintain basic life functions like breathing and digestion at rest.
              <br />
              <strong>TDEE</strong> (Total Daily Energy Expenditure) is an estimate of how many calories you burn in a day, taking into account your BMR and activity level.
              <br />
              Use this calculator to estimate your BMR and TDEE, which can help you manage your calorie intake for weight maintenance, loss, or gain.
            </p>
          </div>
          <form onSubmit={calculateBMRAndTDEE}>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select className="form-select" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age</label>
              <input 
                type="number" 
                placeholder='age' 
                className="form-control" 
                id="age" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
                required 
                min="15" 
                max="80" 
              />
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="height" className="form-label">Height</label>
                <input 
                  type="number" 
                  placeholder='height' 
                  className="form-control" 
                  id="height" 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)} 
                  required 
                  min="1" 
                  max="300"
                />
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
                <input 
                  type="number" 
                  placeholder='weight' 
                  className="form-control" 
                  id="weight" 
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)} 
                  required 
                  min="1" 
                  max="180"
                />
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
              <label htmlFor="exercise" className="form-label">I exercise</label>
              <select className="form-select" id="exercise" value={exercise} onChange={(e) => setExercise(e.target.value)} required>
                <option value="none">None</option>
                <option value="light">1 to 3 times a week</option>
                <option value="moderate">3 to 5 times a week</option>
                <option value="heavy">6 to 7 times a week</option>
              </select>
            </div>

            <Button type="submit" variant="dark">Calculate BMR and TDEE</Button>
          </form>
          
        </div>

        <div className="col-md-6 result-section">
          <h5>Your BMR is</h5>
          <div className="result-box">
            <span id="bmr-result">{bmr.toFixed(2)}</span> kcal
          </div>
          <br></br>
          <h5>Your TDEE is</h5>
          <div className="result-box">
            <span id="tdee-result">{tdee.toFixed(2)}</span> kcal
          </div>
          </div>
          <div className='generate'>
          <div className="output_container">

          <Button variant="dark" onClick={getResponse}>Generate workout plan</Button>

          {test && (
          <div>
            <h2>Workout Plan</h2>
            <div>
              {test.map((step, index) => (
                <p key={index}>{step.trim()}.</p>
              ))}
            </div>
          </div>
        )}
        
      </div>


        </div>
      </div>
    </Container>
  );
};

export default Calories;