import { Link } from "react-router-dom";
import Item from "../Item/Item";
import "../Item/Item.css";

const ItemList = ({ lista }) => {
  // console.log(lista);

  return (
    <div className="grid_productos">
      {lista.map((product) => (
        <Link
          className="card decoration1"
          to={"/detail/" + product.id}
          key={product.id}
        >
          <Item
            title={product.title}
            price={product.price}
            image={product.image}
            stock={product.stock}
          />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
