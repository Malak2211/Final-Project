 import React from "react";
 const exercises = [
  {
    name: "double leg stretch",
    img: "https://i.pinimg.com/originals/d5/c3/5c/d5c35c2d1bc24c5ce7ab2b171272e0fc.gif", // Replace with actual GIF or image URL
  },
  {
    name: "plank bird dog",
    img: "https://i.pinimg.com/originals/91/e1/bc/91e1bc972552801178bb0dda55422f2c.gif",
  },
  {
    name: "single leg squat kick back",
    img: "https://i.pinimg.com/originals/40/cd/50/40cd502ba0ec62b239d439f6d2aa5b35.gif", // Replace with actual GIF or image URL
  },
  {
    name: "diamond kicks",
    img: "https://i.pinimg.com/originals/f2/8c/40/f28c4011844420e687b7dbbb9d081000.gif", // Replace with actual GIF or image URL
  },
 
  {
    name: "Sumo Side Bends",
    img: "https://i.pinimg.com/originals/10/4c/5f/104c5f7ea76d834b4a7c730de66cb580.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Butterfly Dips",
    img: "https://i.pinimg.com/originals/7f/35/f1/7f35f144f06a115aedd3e2d2163b8d69.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Lunge Back Kick",
    img: "https://i.pinimg.com/originals/64/16/1b/64161b1bbd8cade3dd6c5e4beddd696c.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Asymmetrical Push Up",
    img: "https://i.pinimg.com/originals/1d/15/2b/1d152b195156aef128bc60f8fce5b5ff.gif", // Replace with actual GIF or image URL
  },
   {
    name: "Speed Bag Punches",
    img: "https://i.pinimg.com/originals/4b/93/a4/4b93a4c5a4d4f59eb2909a8fb0e97969.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Side Lunge Front Raise",
    img: "https://i.pinimg.com/originals/48/d3/18/48d318b6fd069adf7fd5ad23bf3206f6.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Dumbbell Plank Rotation",
    img: "https://i.pinimg.com/originals/bc/9b/7e/bc9b7e80d0e37aee17a8ff995df7ea43.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Split Squat Press",
    img: "https://i.pinimg.com/originals/d0/54/1b/d0541bb653319a56a5d876e3eabb319a.gif", // Replace with actual GIF or image URL
  },
   {
    name: "Curtsy Lunge Side Kick Raise",
    img: "https://i.pinimg.com/originals/75/90/9d/75909d3c7bc61a35eef41f129edae1b3.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Squat Curl ",
    img: "https://i.pinimg.com/originals/7e/d6/d7/7ed6d7c74d9befc91815a3afe73d6ec7.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Dumbbell Leg Loop",
    img: "https://i.pinimg.com/originals/8b/d1/2c/8bd12cead1a1c9242472d1da475846bf.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Dumbbell Bent Over Row",
    img: "https://i.pinimg.com/originals/52/2b/db/522bdbd001e5f81ddb3821260d3d6742.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Dumbbell Lateral Raise",
    img: "https://i.pinimg.com/originals/af/f1/b7/aff1b7bf1dea681c9f494cbeb95b1234.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Single Leg Deadlift",
    img: "https://i.pinimg.com/originals/75/88/43/758843837f5f4825ab2cdd6084725991.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Wood Chop",
    img: "https://i.pinimg.com/originals/e2/d8/5d/e2d85d270647f75fdc0f6eac39a4a084.gif", // Replace with actual GIF or image URL
  },
 
  {
    name: "Lawnmower Pull",
    img: "https://i.pinimg.com/originals/df/4a/e2/df4ae262ebf58c803d8daa6cf497fa7c.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Step Up Crossover",
    img: "https://i.pinimg.com/originals/f8/63/f4/f863f4ca6f55b54ed1fd0999f6f929f4.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Bulgarian Split Squat",
    img: "https://i.pinimg.com/originals/e9/90/2b/e9902beff1f23a4b3e4712639fb53f7b.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Step Up With Knee Raise",
    img: "https://i.pinimg.com/originals/52/d8/ef/52d8efd6027fd752bde4e2f4dc5fe069.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Inner Thigh Raise To Plank",
    img: "https://i.pinimg.com/originals/07/e7/3d/07e73d96fe0e1ea7f5b722e64105291f.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Superman Twist",
    img: "https://i.pinimg.com/originals/e7/67/01/e767015e4c2c6e9e3dfb7fa68621da0d.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Side Plank Hip Lifts",
    img: "https://i.pinimg.com/originals/af/7f/56/af7f569f481e3458cebb80ab625dfbd2.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Seated Knee Tucks",
    img: "https://i.pinimg.com/originals/4a/50/b4/4a50b49f6fa049df74e759c29c150fbe.gif", // Replace with actual GIF or image URL
  },
  {
    name: "Reverse Crunch Twist",
    img: "https://i.pinimg.com/originals/f8/20/d3/f820d33087467aec5a8df8771e7772cf.gif", // Replace with actual GIF or image URL
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
