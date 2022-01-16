import "./ItemListContainer.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const getData = await fetch("https://fakestoreapi.com/products");
    const parseData = await getData.json();
    setProducts(parseData);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="ItemListContainer">
        <h1>{greeting}</h1>
      </div>
      <div className="ItemListContainer">
        <ItemList products={products} />
        {/* <ItemCount stock={12} initial={1} /> */}
      </div>
    </>
  );
};
