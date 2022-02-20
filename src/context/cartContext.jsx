import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

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
          { id: item.id, idprod: item.idprod, name: item.title, price: item.price, qty: qty },
        ]);

    const sumItem = item.price * qty;
    setTotal(total + sumItem);
  };

  const removeItem = (id, qty, price) => {
    setItems(items.filter(item => item.id !== id))
    
    const restItem = qty * price;
    setTotal(total - restItem);
  };

  const clear = () => {
    setItems([])
  }


  let conteo = 0;

  items.map((item) => {
    conteo = conteo + item.qty;
  });

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear, total, conteo }}>
      {children}
    </CartContext.Provider>
  );
};