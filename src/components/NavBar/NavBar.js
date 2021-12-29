import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <p>Vulcano Shop</p>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Sotware</a>
        </li>
        <li>
          <a href="#">Hardware</a>
        </li>
        <li>
          <a href="#">Contactanos</a>
        </li>
      </ul>
    </nav>
  );
};
