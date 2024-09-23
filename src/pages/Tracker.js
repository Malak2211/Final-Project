import React, { useState } from 'react';
import './Tracker.css'; // Optional CSS file

const Tracker = () => {
  const [sleepHours, setSleepHours] = useState('');
  const [sleepLog, setSleepLog] = useState([]);

  const handleInputChange = (e) => {
    setSleepHours(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sleepHours) {
      setSleepLog([...sleepLog, parseFloat(sleepHours)]);
      setSleepHours('');
      sendSleepData(sleepHours); // Call the function to send data
    }
  };

  const sendSleepData = async (hours) => {
    try {
      const response = await fetch('https://api.otherwebsite.com/sleep', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ hours }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const totalSleep = sleepLog.reduce((acc, hours) => acc + hours, 0);

  return (
    <div className="sleep-tracker">
      <h1>Sleep Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={sleepHours}
          onChange={handleInputChange}
          placeholder="Enter hours of sleep"
          min="0"
        />
        <button type="submit">Log Sleep</button>
      </form>
      <h2>Total Sleep: {totalSleep} hours</h2>
      <h3>Sleep Log:</h3>
      <ul>
        {sleepLog.map((hours, index) => (
          <li key={index}>{hours} hours</li>
        ))}
      </ul>
    </div>
  );
};

export default Tracker;
