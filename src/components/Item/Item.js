import { Card, Button, Badge } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Item.css'

export const Item = ({id, title, price, image}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Badge bg="secondary">${price}</Badge>
      <Card.Text>
      <Link to={`/vulcanoshop/item/${id}`}><Button variant="primary">Ver mas detalles</Button></Link>
      </Card.Text>
    </Card.Body>
  </Card>);
};
