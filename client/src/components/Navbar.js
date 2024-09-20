import { Navbar, Nav ,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand href="/">Wagapat Gpt</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/meals"> Recipe Meals</Nav.Link>
        <Nav.Link href="/calories">Your Calories</Nav.Link>
        <Nav.Link href="/suggest-plan">AI Plan</Nav.Link>
        <Nav.Link href="/exercises">Exercises</Nav.Link>
        <Nav.Link href="/signup">Signup</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;

