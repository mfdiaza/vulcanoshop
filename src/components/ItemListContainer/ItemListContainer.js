import "./ItemListContainer.css";
// import { ItemCount } from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams} from 'react-router-dom'

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams()

  const getProducts = async () => {
    const getData = await fetch("https://fakestoreapi.com/products");
    const parseData = await getData.json();

    if (categoryID) {
      setProducts(parseData.filter( prod => prod.category === categoryID))
    }
    else {
    setProducts(parseData);
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
      <div className="ItemListContainer">
        <ItemList products={products} />
        {/* <ItemCount stock={12} initial={1} /> */}
      </div>
    </>
  );
};
