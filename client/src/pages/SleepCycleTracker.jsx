import React, { useState } from 'react';
import './SleepCycleTracker.css';

const SleepCycleTracker = () => {
  const [wakeUpTime, setWakeUpTime] = useState('');
  const [suggestedSleepTimes, setSuggestedSleepTimes] = useState([]);
  const [totalSleepHours, setTotalSleepHours] = useState(0);

  const calculateSleepTimes = () => {
    if (!wakeUpTime) return; // Prevent calculation if no time is set

    const wakeUpDate = new Date(`1970-01-01T${wakeUpTime}:00`);
    const cycles = 6; // Maximum of 6 cycles (9 hours)
    const newSleepTimes = [];

    for (let i = 1; i <= cycles; i++) {
      const sleepTime = new Date(wakeUpDate.getTime() - i * 90 * 60000);
      newSleepTimes.push(sleepTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }

    setSuggestedSleepTimes(newSleepTimes);
    setTotalSleepHours(cycles * 1.5); // Each cycle is 1.5 hours
  };

  return (
    <div className="tracker-container">
      <h2>Sleep Cycle Tracker</h2>
      <input
        type="time"
        value={wakeUpTime}
        onChange={(e) => setWakeUpTime(e.target.value)}
      />
      <button onClick={calculateSleepTimes}>Calculate Sleep Times</button>
      
      {suggestedSleepTimes.length > 0 && (
        <div>
          <h3>Suggested Sleep Times:</h3>
          <ul>
            {suggestedSleepTimes.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
          <p>Total Sleep Hours: {totalSleepHours} hours</p>
        </div>
      )}

      <div className="sleep-tips">
        <h3>Sleep Tips:</h3>
        <ul>
          <li>Maintain a consistent sleep schedule.</li>
          <li>Create a relaxing bedtime routine.</li>
          <li>Avoid screens at least an hour before bed.</li>
          <li>Keep your bedroom dark and cool.</li>
          <li>Limit caffeine and heavy meals before bedtime.</li>
        </ul>
      </div>

      <div className="wake-up-tips">
        <h3>Ideal Wake-Up Times:</h3>
        <ul>
          <li>Try to wake up at the same time every day.</li>
          <li>Consider natural light to help you wake up.</li>
          <li>Avoid hitting the snooze button.</li>
        </ul>
      </div>
    </div>
  );
};

export default SleepCycleTracker;
