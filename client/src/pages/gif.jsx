import React from 'react';
import '../styles/gif.css'; // Import the CSS file

const WorkoutTracker = () => {
  return (
    <div>
      <title>Workout Tracker</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <div className="container4">
        <h1>WORKOUT TRACKER</h1>
        <p>
          Progress can be tracked in several ways and is completely your
          preference. It is a good idea to write down weights and repetitions to
          track your progress - this can also help you to keep your motivation
          up and to build a good habit.
        </p>
        <p>
          Below you can plan or track your workouts per week and you can also
          add other forms of training, such as walking, running, or a group
          class if you want.
        </p>
        <p>We hope you have fun during this journey!</p>
        <WorkoutTable />
        <WorkoutDetails />
      </div>
    </div>
  );
};

const WorkoutTable = () => {
    const weeks = Array.from({ length: 8 }, (_, index) => `WEEK ${index + 1}`);
  
    // Example workouts for each day (you can customize these per week/day)
    const workoutPlan = [
      ["Leg Press", "Chest Press", "Rest", "Cardio", "Back Extension", "Squats", "Rest"],
      ["Deadlift", "Overhead Press", "Rest", "Pull-ups", "Lunges", "Cardio", "Rest"],
      ["Squats", "Bench Press", "Rest", "Rows", "Deadlifts", "Burpees", "Rest"],
      ["Barbell Rows", "Lunges", "Rest", "Dumbbell Press", "Pull-ups", "Mountain Climbers", "Rest"],
      ["Dumbbell Press", "Cable Rows", "Rest", "Chest Fly", "Deadlift", "Cardio", "Rest"],
      ["Bench Press", "Squats", "Rest", "Barbell Rows", "Overhead Press", "High Knees", "Rest"],
      ["Lunges", "Pull-ups", "Rest", "Pistol Squats", "Mountain Climbers", "Plank", "Rest"],
      ["Deadlift", "Arnold Press", "Rest", "T-Bar Rows", "Dumbbell Bench", "Cardio", "Rest"]
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
          {weeks.map((week, weekIndex) => (
            <tr key={week}>
              <td>{week}</td>
              {workoutPlan[weekIndex].map((workout, dayIndex) => (
                <td key={dayIndex}>{workout}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  

const WorkoutDetails = () => {
  return (
    <>
      {Array.from({ length: 4 }, (_, index) => (
        <WorkoutWeek key={index + 1} weekNumber={index + 1} />
      ))}
    </>
  );
};

const WorkoutWeek = ({ weekNumber }) => {
  const focusText = [
    "You are now about to get to know the fitness floor and the machines at the gym.",
    "You have now passed the first week and will now strengthen the body and learn about new weights.",
    "This week we use dumbbells, kettlebells, and barbells in the workouts.",
    "Hopefully you find yourself more comfortable being in the free weights section now."
  ];

  const workouts = [
    {
      warmUp: [
        "5 minutes on treadmill or another cardio machine",
        "Squat to stand x 6 reps",
        "World’s greatest stretch x 6 reps/side",
        "Glute stretch bench x 6 reps/side",
      ],
      exercises: [
        {
          day: "DAY 1",
          list: [
            "Leg press 3 sets x 12-15 reps",
            "Chest press machine 3 sets x 12-15 reps",
            "Seated cable row 3 sets x 12-15 reps",
            "Leg extension 3 sets x 12-15 reps",
            "Mountain climbers 3 sets x 20 sec",
          ],
        },
        {
          day: "DAY 2",
          list: [
            "Air squats @ 3211* 3 sets x 12-15 reps",
            "Back extensions 3 sets x 12-15 reps",
            "Lat pulldown 3 sets x 12-15 reps",
            "Backward lunges 3 sets x 12-15 reps",
            "Plank 3 sets x 30 sec",
          ],
        },
      ],
    },
    {
      warmUp: [
        "5 minutes on stationary bike",
        "Hip flexor stretch x 6 reps/side",
        "Cat-cow stretch x 8 reps",
        "Lunges with twist x 6 reps/side",
      ],
      exercises: [
        {
          day: "DAY 1",
          list: [
            "Deadlift 3 sets x 10-12 reps",
            "Overhead press 3 sets x 10-12 reps",
            "Pull-ups 3 sets x 8-10 reps",
            "Leg curl machine 3 sets x 10-12 reps",
            "Jump rope 3 sets x 30 sec",
          ],
        },
        {
          day: "DAY 2",
          list: [
            "Front squats 3 sets x 10-12 reps",
            "Dumbbell rows 3 sets x 10-12 reps",
            "Lateral raises 3 sets x 10-12 reps",
            "Reverse lunges 3 sets x 10-12 reps",
            "Russian twists 3 sets x 20 reps",
          ],
        },
      ],
    },
    {
      warmUp: [
        "5 minutes on rowing machine",
        "Inchworms x 6 reps",
        "Arm circles x 10 reps",
        "Glute bridges x 10 reps",
      ],
      exercises: [
        {
          day: "DAY 1",
          list: [
            "Barbell squats 3 sets x 8-10 reps",
            "Incline bench press 3 sets x 8-10 reps",
            "Bent-over rows 3 sets x 8-10 reps",
            "Hamstring curls 3 sets x 8-10 reps",
            "Burpees 3 sets x 15 reps",
          ],
        },
        {
          day: "DAY 2",
          list: [
            "Walking lunges 3 sets x 10-12 reps",
            "Dumbbell bench press 3 sets x 10-12 reps",
            "T-bar row 3 sets x 10-12 reps",
            "Cable chest fly 3 sets x 10-12 reps",
            "Mountain climbers 3 sets x 30 sec",
            
          ],
        },
      ],
    },
    {
      warmUp: [
        "5 minutes on elliptical",
        "Lunges with overhead reach x 6 reps/side",
        "Shoulder dislocates x 10 reps",
        "Leg swings x 10 reps",
      ],
      exercises: [
        {
          day: "DAY 1",
          list: [
            "Sumo deadlift 3 sets x 6-8 reps",
            "Dumbbell shoulder press 3 sets x 8-10 reps",
            "Pull-ups 3 sets x 8-10 reps",
            "Leg extension 3 sets x 8-10 reps",
            "High knees 3 sets x 30 sec",
          ],
        },
        {
          day: "DAY 2",
          list: [
            "Pistol squats 3 sets x 8-10 reps",
            "Barbell rows 3 sets x 8-10 reps",
            "Arnold press 3 sets x 8-10 reps",
            "Split squats 3 sets x 8-10 reps",
            "Plank shoulder taps 3 sets x 20 reps",
          ],
        },
      ],
    },
  ];

  const workout = workouts[weekNumber - 1];

  return (
    <div className="workout-section">
      <h2>WEEK {weekNumber} | WORKOUTS</h2>
      <p>
        <span>FOCUS THIS WEEK:</span> {focusText[weekNumber - 1]}
      </p>
      <p><span>WARM UP:</span></p>
      <ul>
        {workout.warmUp.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {workout.exercises.map((workoutDay) => (
        <div key={workoutDay.day}>
          <p><span>{workoutDay.day}:</span></p>
          <ul>
            {workoutDay.list.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkoutTracker;
