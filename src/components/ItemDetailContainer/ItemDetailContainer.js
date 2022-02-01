import { ItemCount } from "../ItemCount/ItemCount";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Spinner } from 'react-bootstrap'
import { CartContext } from "../../context/cartContext";

export const ItemDetailContainer = () => {
  const { productID } = useParams();
  const [item, setItem] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { addItem } = useContext(CartContext)

  const getItem = async () => {
    try {
      setIsLoading(true);
      const getData = await fetch(
        `https://fakestoreapi.com/products/${productID}`
      );
      const parseData = await getData.json();
      setItem(parseData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getItem();
  }, [productID]);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <Spinner animation="grow" variant="secondary" role="status"></Spinner>
          <h1>Cargando producto...</h1>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : item ? (
        <div className="container">
          <div className="row">
            <div className="col-8">
              {/* <div className="ItemDetailContainer"> */}
              <ItemDetail item={item} />
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <ItemCount stock={12} initial={1} addItem={addItem} item={item}/>
            </div>
          </div>
        </div>
      ) : (
        <p>No se encontró el producto</p>
      )}
    </>
  );
};
