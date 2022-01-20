// import { ItemCount } from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { productID } = useParams();
  const [item, setItem] = useState([]);

  const getItem = async () => {
    const getData = await fetch(
      `https://fakestoreapi.com/products/${productID}`
    );
    const parseData = await getData.json();
    setItem(parseData);
  };
  useEffect(() => {
    getItem();
  }, [productID]);

  return (
    <>
      {item ? (
        <div className="ItemDetailContainer">
          <ItemDetail item={item} />
          {/* <ItemCount stock={12} initial={1} /> */}
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </>
  );
};
