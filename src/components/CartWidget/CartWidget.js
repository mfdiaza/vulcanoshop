import "./CartWidget.css";
import cart from "../../images/cart.png";

export const CartWidget = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <img src={cart} alt="Logo" height="48" className="carrito" />
        </li>
      </ul>
    </div>
  );
};
