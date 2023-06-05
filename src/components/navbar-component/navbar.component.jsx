import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.style.css'
const  NavbarComponent = () => {
  return (
    <Navbar className='navbar' collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand href="/">Housing-society</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="left-auto">
            <Nav.Link className='nav-link' to="/" href="/">Home</Nav.Link>
            <Nav.Link className='nav-link' href="/notice">Notice</Nav.Link>
            <NavDropdown  title="Log-In" id="collasible-nav-dropdown">
              <NavDropdown.Item className='nav-drop' href="/admin">Admin</NavDropdown.Item>
              <NavDropdown.Item className='nav-drop' href="#action/3.2">
                Owner
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;