import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/sleeptracker.css'; 

const SleepCalculator = () => {
    const [option, setOption] = useState('wake');
    const [hours, setHours] = useState(6);
    const [minutes, setMinutes] = useState(0);
    const [amPm, setAmPm] = useState('AM');
    const [cycleLength, setCycleLength] = useState(90); 
    const [fallAsleepTime, setFallAsleepTime] = useState(15); 
    const [results, setResults] = useState([]);

    const calculateSleepTimes = () => {
        const totalMinutes = (hours % 12 + (amPm === 'PM' ? 12 : 0)) * 60 + minutes;

        const newResults = [];
        for (let i = 0; i < 5; i++) {
            const cycleTime = option === 'wake' 
                ? totalMinutes - (i + 1) * cycleLength - fallAsleepTime
                : totalMinutes + (i + 1) * cycleLength + fallAsleepTime;

           
            if (cycleTime >= 0) {
                let hour = Math.floor((cycleTime % 1440) / 60);
                let min = cycleTime % 60;
                const ampm = hour >= 12 ? 'PM' : 'AM';
                hour = hour % 12 || 12; 
                newResults.push(`${hour}:${min < 10 ? '0' : ''}${min} ${ampm}`);
            }
        }
        setResults(newResults);
    };

    const clearFields = () => {
        setHours(6);
        setMinutes(0);
        setAmPm('AM');
        setCycleLength(90); 
        setFallAsleepTime(15); 
        setResults([]);
        setOption('wake');
    };

    return (
        <div className="container1">
           <div className="title" ></div>
            <h1 >Sleep Calculator</h1>
            <h2 className="subtitle">Sleep Cycle Calculator</h2>
            <p className="description">
                Use this calculator to compute what time to go to bed or get up to wake up refreshed between sleep cycles. 
                Adjust the cycle length and fall asleep time to fit your needs.
            </p>
            <div className="calculator-box">
                <form>
                    <div className="mb-3">
                        <label className="form-check-label">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                name="option" 
                                checked={option === 'wake'}
                                onChange={() => setOption('wake')}
                            /> 
                            I want to wake up at
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-check-label">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                name="option" 
                                checked={option === 'sleep'}
                                onChange={() => setOption('sleep')}
                            /> 
                            Go to bed at
                        </label>
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <input 
                            type="number" 
                            className="form-control me-2" 
                            value={hours} 
                            onChange={(e) => setHours(Math.max(1, Math.min(12, e.target.value)))} 
                            min="1" 
                            max="12" 
                            style={{ width: '60px' }}
                        />
                        <span>:</span>
                        <input 
                            type="number" 
                            className="form-control ms-2 me-2" 
                            value={minutes} 
                            onChange={(e) => setMinutes(Math.max(0, Math.min(59, e.target.value)))} 
                            min="0" 
                            max="59" 
                            style={{ width: '60px' }}
                        />
                        <select 
                            className="form-select" 
                            value={amPm} 
                            onChange={(e) => setAmPm(e.target.value)} 
                            style={{ width: '80px' }}
                        >
                            <option>AM</option>
                            <option>PM</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cycle Length (minutes):</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            value={cycleLength} 
                            onChange={(e) => setCycleLength(Math.max(30, e.target.value))} 
                            min="30" 
                            style={{ width: '80px' }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Time to Fall Asleep (minutes):</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            value={fallAsleepTime} 
                            onChange={(e) => setFallAsleepTime(Math.max(1, e.target.value))} 
                            min="1" 
                            style={{ width: '80px' }}
                        />
                    </div>
                    <div className="mb-3 d-flex">
                        <button 
                            type="button" 
                            className="btn btn-calculate me-2" 
                            onClick={calculateSleepTimes}
                        >
                            Calculate
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-clear" 
                            onClick={clearFields}
                        >
                            Clear
                        </button>
                    </div>
                </form>
                {results.length > 0 && (
                    <div className="mt-3">
                        <h4>Suggested Times:</h4>
                        <ul className="list-unstyled">
                            {results.map((time, index) => (
                                <li key={index}>{time}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SleepCalculator;
