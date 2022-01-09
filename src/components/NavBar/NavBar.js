import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./NavBar.css";
import logo from "../../images/logo_swirl.svg";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src= {logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          VulcanoSHOP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Tienda" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Software</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hardware</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Ir al carrito</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
