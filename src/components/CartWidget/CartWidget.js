import "./CartWidget.css";
import cart from "../../images/cart.png";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const CartWidget = () => {

  const { items } = useContext(CartContext)

  let conteo = 0;

  console.log(items)

  items.map((item) => {
    conteo = conteo + item.qty
  })
  return (
    <div className="container">
      <div>
        {conteo}
      </div>
      <ul>
        <li>
          <img src={cart} alt="Logo" height="48" className="carrito" />
        </li>
      </ul>
    </div>
  );
};
