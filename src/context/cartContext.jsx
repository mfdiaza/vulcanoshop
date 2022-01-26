import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "primer prod",
      qty: 5,
    },
  ]);

  const isInCart = (id) => {};

  const addItem = (id, item, qty) => {
    setItems([...items, { ...item, qty: qty }]);
  };

  const removeItem = () => {};

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
