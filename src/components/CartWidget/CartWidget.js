import "./CartWidget.css";
import cart from "../../images/cart.png";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Badge } from "react-bootstrap";

export const CartWidget = () => {
  const { conteo } = useContext(CartContext);

  if (conteo === 0) {
    return (
      <div className="container">
        <ul>
          <li>
            <img src={cart} alt="Logo" height="48" className="carrito" />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="container">
        <ul>
          <li>
            <img src={cart} alt="Logo" height="48" className="carrito" />
            <Badge pill bg="secondary">
              {conteo}
            </Badge>
          </li>
        </ul>
      </div>
    );
  }
};
