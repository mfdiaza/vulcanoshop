import { useState } from "react";

export const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const restItem = () => {
      const newValue = count - 1
      if(newValue >= initial)
        setCount(newValue)
  };

  const sumItem = () => {
    const newValue = count + 1
    if (newValue <= stock)
        setCount(newValue)
  };

  const onAdd = () => {
    const message =`Agregaste ${count} producto`
    count === 1 ? alert(message) : alert(`${message}s`);
  };

  return (
    <div>
    <div className="d-flex">
      <button className='px-3 mx-3' onClick={restItem}>-</button>
      <span className='px-2 mx-2'>{count}</span>
      <button className='px-3 mx-3' onClick={sumItem}>+</button>
    </div>
    <button onClick={onAdd}>Sumar al carrito</button>
    </div>
  );
};
