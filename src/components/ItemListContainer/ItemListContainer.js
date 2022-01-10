import "./ItemListContainer.css";
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemListContainer = ({greeting}) => {
    return (
        <div className = "ItemListContainer">
            <h1>
                {greeting}
            </h1>

        <ItemCount stock={12} initial={1}/>
        </div>
    );
  };
  