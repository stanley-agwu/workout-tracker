import Container from 'react-bootstrap/Container';
import { Nav, Navbar, Button } from 'react-bootstrap';

import './styles.css';
import { useLogout } from '../hooks/useLogout';

const NavBar: React.FC = () => {
  const { execute: handleLogout } = useLogout();

  return (
    <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">Freak workouts</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
          <Button variant="outline-secondary" onClick={handleLogout}>Logout</Button>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/signin">Sign in</Nav.Link>
            <Nav.Link href="/signup">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;