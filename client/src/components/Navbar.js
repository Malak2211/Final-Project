import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import "../styles/NavBar.css"; // Import custom CSS


const NavBar = () => {
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    navigate('/login'); // Redirect the user to the login page
  };

  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="navbar-brand-custom">Wagabat Gpt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/meals" className="nav-link-custom">Recipe Meals</Nav.Link>
            <Nav.Link as={Link} to="/calories" className="nav-link-custom">Your Calories</Nav.Link>
            <Nav.Link as={Link} to="/exercises" className="nav-link-custom">Exercises</Nav.Link>
            <Nav.Link as={Link} to="/Tracker" className="nav-link-custom">Sleep Tracker</Nav.Link>
            <Nav.Link as={Link} to="/ingred" className="nav-link-custom">Get Recipe</Nav.Link>
            <Nav.Link as={Link} to="/suggest" className="nav-link-custom">Today's meal</Nav.Link>
          </Nav>
          <div className="ml-auto">
            {/* Logout button */}
            <Button className="btn-sign-in" variant="outline-light" onClick={handleLogout}>Logout</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

