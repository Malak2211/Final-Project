// src/components/ExerciseGrid.js
import React from 'react';

// Sample data for exercises
const exercises = [
  {
    name: "Assisted Tricep Dips",
    img: "E.gif", // Replace with actual GIF or image URL
  },
  {
    name: "SPOTEBI",
    img: "SPOTEBI.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Crab Kicks",
    img: "Crab Kicks _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Split Squat Press",
    img: "Split Squat Press _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Tricep Dips",
    img: "Tricep Dips _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Step Up Crossover",
    img: "Step Up Crossover _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Squat With Overhead Tricep Extension",
    img: "Squat With Overhead Tricep Extension _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Squat Curl",
    img: "Squat Curl _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Split Squat Press",
    img: "Split Squat Press _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Side Lunge Front Raise",
    img: "Side Lunge Front Raise _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Scissor Kicks",
    img: "Scissor Kicks _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Band Kickback",
    img: "Band Kickback _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Mountain Climber Twist",
    img: "Mountain Climber Twist _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Jump Start",
    img: "Jump Start _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Dumbbell Swing",
    img: "Dumbbell Swing _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Dumbbell Punches ",
    img: "Dumbbell Punches _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Dumbbell Lateral Raise",
    img: "Dumbbell Lateral Raise _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Dumbbell Front Raise",
    img: "Dumbbell Front Raise _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Dumbbell Bent Over Row",
    img: "Dumbbell Bent Over Row _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Double Pulse Squat Jump",
    img: "Double Pulse Squat Jump _ Exercise Illustration.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Deadlift Upright Row",
    img: "Deadlift Upright Row _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Lying Tricep Extension",
    img: "Lying Tricep Extension _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Asymmetrical Push Up",
    img: "Asymmetrical Push Up _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Around The Worlds",
    img: "Around The Worlds _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Alternating Medicine Ball Push Up",
    img: "Alternating Medicine Ball Push Up _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Alternate Heel Touchers",
    img: "Alternate Heel Touchers _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Lateral Band Walk",
    img: "Lateral Band Walk _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Side Lunge Band Lateral Raise",
    img: "Side Lunge Band Lateral Raise _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Star Toe Touch Sit Ups",
    img: "Star Toe Touch Sit Ups _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Up Down Plank",
    img: "Up Down Plank _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Forward Jump Shuffle Back",
    img: "Forward Jump Shuffle Back _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
  {
    name: "V Ups",
    img: "V Ups _ Illustrated Exercise Guide.gif", // Replace with actual GIF or image URL
  },
];

const ExerciseGrid = () => {
  return (
    <div style={styles.gridContainer}>
      {exercises.map((exercise, index) => (
        <div key={index} style={styles.gridItem}>
          <img src={exercise.img} alt={exercise.name} style={styles.image} />
          <p style={styles.caption}>{exercise.name}</p>
        </div>
      ))}
    </div>
  );
};

// Styling for the grid layout and items
const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 3 columns layout
    gap: '20px',
    padding: '20px',
    justifyItems: 'center',
  },
  gridItem: {
    textAlign: 'center',
  },
  image: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    
  },
  caption: {
    marginTop: '10px',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
};

export default ExerciseGrid;
