import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const Cart = () => {
    const { items, removeItem, clear } = useContext(CartContext);

    console.log(items)
  return (
    <>
      <h1>Este es el carrito</h1>

      <div>
        {items.length ? (
            items.map((item) => (
              <div key={item.id}>
              <p>{item.name} - {item.qty}</p>
              <p>${item.price}</p>
              <p onClick={() => removeItem(item.id)}>REMOVER ITEM</p>
              
              <div>
              <p onClick={() => clear()}>Vaciar carrito</p>
              </div>
              </div>

              
            ))
        ) : (
          <p>
              Carrito vacio
          </p>
        )
        }
      </div>
    </>
  );
};
