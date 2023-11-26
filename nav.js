import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">DPSS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#Main">Home</Nav.Link>
           
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
            { /* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="/aboutus" className='text-decoration-none text-secondary'>About Us</Link>
              
            </Nav.Link>
            <Nav.Link>
            <Link to="/contact" className='text-decoration-none text-secondary'>Contact Us</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
           {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
  /> */}
            <Link to="" variant="outline-success" className='ms-2 btn'>Login</Link>
            <Link to="/login" variant="outline-success" className='ms-2 btn'>Sign Up</Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;