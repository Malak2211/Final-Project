import React from 'react'
import { Container, Button } from 'react-bootstrap';
import '../styles/Home.css';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const goToMeals = () => {
    navigate("/Meals");
  };
  return(
    <div className="hero-section" style={{ backgroundImage: `url('/image.jpg')` }}>
    <Container className="text-center text-white d-flex flex-column align-items-center justify-content-center h-100">
      <h1 className="display-4">WELCOME TO Wagbat Gpt</h1>
      <Button variant="outline-light" onClick={goToMeals} className="mt-3" href="#more-info">Learn More</Button>
    </Container>
  </div>
  )

}



export default Home;
