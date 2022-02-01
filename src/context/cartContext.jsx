import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const isInCart = (id) => {
    const detectaItem = items.find((item) => item.id === id);
    return detectaItem;
  };

  const addItem = (item, qty) => {
    isInCart(item.id)
      ? setItems(
          items.map((producto) => {
            if (producto.id === item.id) {
              producto.qty += qty
            }
            return producto;
          })
        )
      : setItems([
          ...items,
          { id: item.id, name: item.title, price: item.price, qty: qty },
        ]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  };

  const clear = () => {
    setItems([])
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
