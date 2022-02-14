import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, title, price, image }) => {
  return (
    <Card className="cardContainer">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link to={`/item/${id}`}>
          <Button variant="primary">Ver mas detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
