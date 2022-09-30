import Container from 'react-bootstrap/Container';
import { Nav, Navbar, Button } from 'react-bootstrap';

import './styles.css';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const NavBar: React.FC = () => {
  const { execute: handleLogout } = useLogout();
  const { state: { user} } = useAuthContext();

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
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {user && (
              <>
                <span className="username">{user.username}</span>
                <Button
                  variant="outline-secondary"
                  onClick={handleLogout}
                  className="me-4"
                >
                  Logout
                </Button>
              </>
              )}
            {!user && (
              <>
                <Nav.Link href="/signin">Sign in</Nav.Link>
                <Nav.Link href="/signup" className="mx-4 ps-4">Sign up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;