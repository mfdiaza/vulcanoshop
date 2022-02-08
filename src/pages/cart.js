import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Table, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

export const Cart = () => {
  const { items, removeItem, clear, total } = useContext(CartContext);
  if (items.length === 0) {
    return (
      <>
        <p>Carrito vacio</p>
        <Link to="/vulcanoshop/tienda">
          <Button variant="primary">Volver a la tienda</Button>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Item</th>
              <th>Precio unitario</th>
              <th>Subtotal</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.qty}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>${(item.price * item.qty).toFixed(2)}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => removeItem(item.id, item.price, item.qty)}
                  >
                    Remover item
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td>TOTAL</td>
              <td></td>
              <td>${total.toFixed(2)}</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Button variant="outline-danger" onClick={() => clear()}>
          Vaciar carrito
        </Button>
      </>
    );
  }
};
