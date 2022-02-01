import "./ItemListContainer.css";
// import { ItemCount } from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { categoryID } = useParams();

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const getData = await fetch("https://fakestoreapi.com/products");
      const parseData = await getData.json();

      if (categoryID) {
        setProducts(parseData.filter((prod) => prod.category === categoryID));
      } else {
        setProducts(parseData);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [categoryID]);

  return (
    <>
      <div className="ItemListContainer">
        <h1>{greeting}</h1>
      </div>
      {isLoading ? (
        <div className="loader">
          <Spinner animation="grow" variant="secondary" role="status">
          </Spinner>
          <h1>Cargando productos...</h1>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : products.length ? (
        <div className="ItemListContainer">
          <ItemList products={products} />
        </div>
      ) : (
        <p>No hay productos</p>
      )}
    </>
  );
};
