import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./NavBar.css";
import logo from "../../images/logo_swirl.svg";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          VulcanoSHOP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/tienda">
                Catalogo completo
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/men's clothing">
                Ropa Hombre
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/women's clothing">
                Ropa Mujer
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/electronics">
                Electrónica
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/jewelery">
                Joyas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container>
        <Nav.Link as={Link} to="/cart">
          <CartWidget />
        </Nav.Link>
      </Container>
    </Navbar>
  );
};
