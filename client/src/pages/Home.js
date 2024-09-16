import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/Home.css';

const Home = () => (
  <div className="hero-section" style={{ backgroundImage: `url('/image.jpg')` }}>
    <Container className="text-center text-white d-flex flex-column align-items-center justify-content-center h-100">
      <h1 className="display-4">WELCOME TO Wagapat Gpt</h1>
      <Button variant="outline-light" className="mt-3" href="#more-info">Read More</Button>
    </Container>
  </div>
);


export default Home;
