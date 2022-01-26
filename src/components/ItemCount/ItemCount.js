import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Badge, Stack } from "react-bootstrap";

export const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);
  const [add, setAdd] = useState(false);

  const restItem = () => {
    const newValue = count - 1;
    if (newValue >= initial) setCount(newValue);
  };

  const sumItem = () => {
    const newValue = count + 1;
    if (newValue <= stock) setCount(newValue);
  };

  const onAdd = () => {
    const message = `Agregaste ${count} producto`;
    count === 1 ? alert(message) : alert(`${message}s`);
    setAdd(!add)
  };

  return (
    <div>
      {
        add ? 
        
        <Stack gap={2} className="mx-auto">
          <Badge bg="secondary">Agregado!</Badge>
          <Link to={`/vulcanoshop/cart`}><Button variant="success">Finalizar compra</Button></Link>
        </Stack>
        
        :
      <div className="d-flex">
        <Button variant="outline-primary" className="px-3 mx-3" onClick={restItem}>-</Button>
        <span className="px-2 mx-2">{count}</span>
        <Button variant="outline-primary" className="px-3 mx-3" onClick={sumItem}>+</Button>
        <Button onClick={onAdd} className="mx-2">
          Sumar al carrito
        </Button>
      </div>
      }
    </div>
  );
};
