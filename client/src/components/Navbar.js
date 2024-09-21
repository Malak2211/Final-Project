import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../styles/NavBar.css"; // Import custom CSS

const NavBar = () => (
  <Navbar className="navbar-custom" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/home" className="navbar-brand-custom">Wagapat Gpt</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/meals" className="nav-link-custom">Recipe Meals</Nav.Link>
          <Nav.Link as={Link} to="/calories" className="nav-link-custom">Your Calories</Nav.Link>
          <Nav.Link as={Link} to="/suggest-plan" className="nav-link-custom">AI Plan</Nav.Link>
          <Nav.Link as={Link} to="/exercises" className="nav-link-custom">Exercises</Nav.Link>
        </Nav>
        <div className="ml-auto">
          {/* Link to Login and Sign Up pages */}
          <Button className="btn-sign-in" as={Link} to="/login" variant="outline-light">Login</Button>
          <Button className="btn-sign-up" as={Link} to="/signup" variant="light">Sign Up</Button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;

