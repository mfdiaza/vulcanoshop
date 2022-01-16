import { Card, Button, Badge } from "react-bootstrap";
import './Item.css'

export const Item = ({title, price, image}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Badge bg="secondary">${price}</Badge>
      <Card.Text>
      <Button variant="primary">Ver mas detalles</Button>
      </Card.Text>
    </Card.Body>
  </Card>);
};
