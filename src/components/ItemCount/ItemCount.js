import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Badge, Stack } from "react-bootstrap";
import { CartContext } from "../../context/cartContext";

export const ItemCount = ({ stock, initial, item }) => {
  const [count, setCount] = useState(initial);
  const [add, setAdd] = useState(false);
  const { addItem } = useContext(CartContext);

  const restItem = () => {
    const newValue = count - 1;
    if (newValue >= initial) setCount(newValue);
  };

  const sumItem = () => {
    const newValue = count + 1;
    if (newValue <= stock) setCount(newValue);
  };

  const onAdd = () => {
    setAdd(!add);
    addItem(item, count);
  };

  return (
    <div>
      {add ? (
        <Stack gap={2} className="mx-auto">
          { count === 1 ? <Badge bg="secondary">Sumaste {count} producto al carrito!</Badge> : <Badge bg="secondary">Sumaste {count} productos al carrito!</Badge>}
          <Link to={`/cart`}>
            <Button variant="success">Finalizar compra</Button>
          </Link>
        </Stack>
      ) : (
        <div className="d-flex flex-wrap">
          <Button
            variant="outline-primary"
            className="px-3 mx-3"
            onClick={restItem}
          >
            -
          </Button>
          <span className="px-2 mx-2">{count}</span>
          <Button
            variant="outline-primary"
            className="px-3 mx-3"
            onClick={sumItem}
          >
            +
          </Button>
          <Button onClick={onAdd} className="mx-2">
            Sumar al carrito
          </Button>
        </div>
      )}
    </div>
  );
};
