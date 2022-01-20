import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
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
            <Nav.Link href="/vulcanoshop/">Home</Nav.Link>
            <Nav.Link href="/vulcanoshop/cart">Cart</Nav.Link>
            <Nav.Link href="/vulcanoshop/about">About</Nav.Link>
          <NavDropdown title="Tienda" id="basic-nav-dropdown">
          <NavDropdown.Item href="/vulcanoshop/tienda">Tienda</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
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
