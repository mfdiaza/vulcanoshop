import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const Cart = () => {
    const { items, addItem} = useContext(CartContext);

    console.log(items)
  return (
    <>
      <h1>Este es el carrito</h1>

      <div></div>
    </>
  );
};
