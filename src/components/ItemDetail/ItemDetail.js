import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const ItemDetail = ({ item }) => {
  return (
    <>
      <h1>{item.title}</h1>
      <img src={item.image} width="120px"></img>
      <p>{item.description}</p>
      <span>${item.price}</span>
      <div>
        <Link to="/vulcanoshop/tienda">
          <Button variant="primary">Volver a la tienda</Button>
        </Link>
      </div>
    </>
  );
};
