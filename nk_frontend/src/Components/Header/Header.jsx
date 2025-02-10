import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="md" fixed='top' className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        NK_Communications
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutUs">About Us</Nav.Link>

            <NavDropdown title="Other" id="basic-nav-dropdown">
              <Nav.Link href="/clients">Clients</Nav.Link>
              <Nav.Link href="#action/3.2">
                Team
              </Nav.Link>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
          
            </NavDropdown>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;