import React from 'react';
import '../styles/gif.css';

const WorkoutTracker = () => {
  return (
    <div>
      <title>Workout Tracker</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <div className="container4">
        <h1>A 7-Day Workout Routine To Help Meet Your Fitness Goals</h1>
        <p>
          A well-balanced workout schedule can help you reap the benefits of physical activity, such as boosting your mood and helping with sleep. The key to an effective workout plan is to challenge your body and engage your mind by adding various cardio, full-body, stretching, and weightlifting exercises.
        </p>
        <WorkoutTable />
        <WorkoutDetails />
      </div>
    </div>
  );
};

const WorkoutTable = () => {
  const workoutPlan = [
    ["Cardio", "Lower body", "Upper body and core", "Active rest and recovery", "Lower body with a focus on glutes", "Upper body", "Rest and recovery"]
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>WEEK</th>
          <th>MONDAY</th>
          <th>TUESDAY</th>
          <th>WEDNESDAY</th>
          <th>THURSDAY</th>
          <th>FRIDAY</th>
          <th>SATURDAY</th>
          <th>SUNDAY</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {workoutPlan[0].map((workout, index) => (
            <td key={index}>{workout}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

const WorkoutDetails = () => {
  return (
    <>
      {Array.from({ length: 1 }, (_, index) => (
        <WorkoutWeek key={index + 1} weekNumber={index + 1} />
      ))}
    </>
  );
};

const WorkoutWeek = ({ weekNumber }) => {
  const focusText = [
    "You are now about to get to know the fitness floor.",
   
  ];

  const workouts = [
    {
      warmUp: [
        "Spend five to 10 minutes warming up before each workout to prevent injury. Try doing dynamic stretches—such as butt kicks and high knees—to get the blood flowing to your muscles and move your joints. End your workout with a cool down by stretching your muscles or taking a slow walk to safely bring your heart rate back to normal",
        
      ],
      exercises: [
        {
          day: "Monday: Cardio",
          list: [
            "Aim for at least 30 minutes of aerobic activity, such as biking, jogging, running, and walking.",
            "Moderate-intensity cardio: You should be able to hold a conversation during exercise.",
            "Vigorous-intensity cardio: You can only say a few words without pausing to catch your breath.",
            "Max heart rate: Subtract your age from 220. Target moderate intensity (50-70%) and vigorous intensity (70-85%).",
            "Benefits: Steady-state cardio improves heart and lung stamina, and reduces the risk of diabetes, heart disease, and stroke.",
          ],
        },
        {
          day: "Tuesday: Lower Body",
          list: [
            "Compound lifts targeting hamstrings, glutes, and quads.",
            "Deadlifts: 3 sets x 10 reps - Works lower body, arms, and core.",
            "Hip thrusts: 3 sets x 10 reps - Focus on glutes and hamstrings.",
            "Lunges: 3 sets x 10 reps per leg - Strengthens legs and improves balance.",
            "Squats: 3 sets x 10 reps - Targets quads, hamstrings, and glutes.",
            "Tip: Use enough weight to feel muscle burn by the last couple of reps.",
          ],
        },
        {
          day: "Wednesday: Upper Body and Core",
          list: [
            "Focus on biceps, triceps, chest, and core.",
            "Bicep curls: 3 sets x 10 reps - Strengthens arms.",
            "Chest press: 3 sets x 10 reps - Targets chest and shoulders.",
            "Tricep dips: 3 sets x 10 reps - Works triceps.",
            "Core circuit: Crunches, planks, and Russian twists for 10-15 minutes.",
            "Tip: Focus on form to avoid injury.",
          ],
        },
        {
          day: "Thursday: Active Rest and Recovery",
          list: [
            "Take time to recover from muscle-strengthening activities.",
            "Active recovery: Light activities like walking and stretching.",
            "Importance: Recovery allows muscles to repair and strengthen.",
            "Optional: Engage in light movement if you're not too sore, but avoid intense workouts.",
          ],
        },
        {
          day: "Friday: Lower Body with Focus on Glutes",
          list: [
            "Warm-up: 3 rounds of resistance band exercises (bridges, clamshells, squats).",
            "Weighted exercises targeting glutes and hamstrings.",
            "Deadlifts: 3 sets x 10 reps - Engage glutes and hamstrings.",
            "Hip thrusts: 3 sets x 10 reps - Focus on glute activation.",
            "Single-legged hip thrusts: 3 sets x 10 reps - Target glutes and improve balance.",
          ],
        },
        {
          day: "Saturday: Upper Body (Back and Shoulders)",
          list: [
            "Warm-up: Push-ups and pull-ups (3 sets x 10 reps each).",
            "Weighted exercises targeting the back and shoulders.",
            "Dumbbell single-arm row: 3 sets x 10 reps per arm - Works the upper back.",
            "Lat pull-down: 3 sets x 10 reps - Focuses on back muscles.",
            "Lateral raise: 3 sets x 10 reps - Strengthens shoulders.",
            "Reverse fly: 3 sets x 10 reps - Targets rear delts and back muscles.",
            "Shoulder press: 3 sets x 10 reps - Strengthens shoulders and upper arms.",
          ],
        },
        {
          day: "Sunday: Rest and Recovery Day",
          list: [
            "Take a complete rest day or engage in light recovery activities like yoga or stretching.",
            "Benefits: Prevent muscle stiffness and soreness, promote relaxation.",
            "Tip: Listen to your body and rest as needed to avoid overtraining.",
          ],
        },
      ],
    },
  ];

  // Ensure workout exists
  const workout = workouts[weekNumber - 1];

  // Check if workout is undefined
  if (!workout) {
    return <div>No workout available for this week.</div>;
  }

  return (
    <div className="workout-section">
      <h2>WEEK {weekNumber} | WORKOUTS</h2>
      <p>
        <span>FOCUS THIS WEEK:</span> {focusText[weekNumber - 1]}
      </p>
      <p><span>WARM UP:</span></p>
      <ul>
        {workout.warmUp && workout.warmUp.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {workout.exercises.map((workoutDay, dayIndex) => (
        <div key={dayIndex}>
          <p><span>{workoutDay.day}:</span></p>
          <ul>
            {workoutDay.list.map((exercise, exerciseIndex) => (
              <li key={exerciseIndex}>{exercise}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkoutTracker;
