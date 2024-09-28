import React, { useState } from 'react';
import './SleepCycleTracker.css';

const SleepCycleTracker = () => {
  const [wakeUpTime, setWakeUpTime] = useState('');
  const [suggestedSleepTimes, setSuggestedSleepTimes] = useState([]);

  const calculateSleepTimes = () => {
    const wakeUpDate = new Date(`1970-01-01T${wakeUpTime}:00`);
    const cycles = 6; // Maximum of 6 cycles (9 hours)
    const newSleepTimes = [];

    for (let i = 1; i <= cycles; i++) {
      const sleepTime = new Date(wakeUpDate.getTime() - i * 90 * 60000);
      newSleepTimes.push(sleepTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }

    setSuggestedSleepTimes(newSleepTimes);
  };

  return (
    <div className="tracker-container">
      <h1>Sleep Cycle Tracker</h1>
      <div className="input-group">
        <label htmlFor="wakeUpTime">Desired Wake Up Time:</label>
        <input
          type="time"
          id="wakeUpTime"
          value={wakeUpTime}
          onChange={(e) => setWakeUpTime(e.target.value)}
        />
      </div>
      <button onClick={calculateSleepTimes}>Get Suggested Sleep Times</button>
      {suggestedSleepTimes.length > 0 && (
        <div className="suggestions">
          <h2>Suggested Sleep Times:</h2>
          <ul>
            {suggestedSleepTimes.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
          <p className="note">Remember to allow 14 minutes to fall asleep!</p>
        </div>
      )}
    </div>
  );
};

export default SleepCycleTracker;
