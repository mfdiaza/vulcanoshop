import "./ItemListContainer.css";
// import { ItemCount } from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { categoryID } = useParams();

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const { docs } = await getDocs(query(collection(db, "items")));
      const parseData = docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      if (categoryID) {
        const { docs } = await getDocs(
          query(collection(db, "items"), where("category", "==", categoryID))
        );
        const parseCategory = docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProducts(parseCategory);
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
          <Spinner animation="grow" variant="secondary" role="status"></Spinner>
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
