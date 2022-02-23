import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Order = () => {
  const { items, clear } = useContext(CartContext);
  const [error, setError] = useState(false);
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (evt) => {
    setBuyer({
      ...buyer,
      [evt.target.name]: evt.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(false);

    if (!buyer.name || !buyer.phone || !buyer.email) {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        didOpen: () => {
          MySwal.clickConfirm();
        },
      }).then(() => {
        return MySwal.fire({
          icon: "error",
          title: <p>Faltan datos!</p>,
        });
      });
    } else {
      const newOrder = {
        buyer,
        items: items.map((item) => ({
          id: item.id,
          title: item.name,
          price: item.price,
          quantity: item.qty,
        })),
      };
      try {
        const docRef = await addDoc(collection(db, "buyer"), newOrder);
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          didOpen: () => {
            MySwal.clickConfirm();
          },
        }).then(() => {
          return MySwal.fire({
            icon: "success",
            title: (
              <>
                <p>Compra realizada!</p> <p>ID de seguimiento: {docRef.id}</p>
              </>
            ),
          });
        });
        clear();
      } catch (error) {
        <p>Se produjo un error: {error}</p>;
      }
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="ControlTextarea1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su nombre y apellido"
          value={buyer.name}
          name="name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Ingrese su email"
          value={buyer.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="ControlTextarea1">
        <Form.Label>Telefono</Form.Label>
        <Form.Control
          type="number"
          placeholder="Telefono"
          name="phone"
          value={buyer.phone}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
