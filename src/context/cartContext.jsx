import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const isInCart = (id) => {
    const detectaItem = items.find((item) => item.idprod === id);
    return detectaItem;
  };

  const addItem = (item, qty) => {
    isInCart(item.idprod)
      ? setItems(
          items.map((producto) => {
            if (producto.idprod === item.idprod) {
              producto.qty += qty
            }
            return producto;
          })
        )
      : setItems([
          ...items,
          { idprod: item.idprod, name: item.title, price: item.price, qty: qty },
        ]);

    const sumItem = item.price * qty;
    setTotal(total + sumItem);
  };

  const removeItem = (id, qty, price) => {
    setItems(items.filter(item => item.idprod !== id))
    
    const restItem = qty * price;
    setTotal(total - restItem);
  };

  const clear = () => {
    setItems([])
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear, total }}>
      {children}
    </CartContext.Provider>
  );
};