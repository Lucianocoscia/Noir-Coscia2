import React from "react";
import { GrFormAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";
import "./ItemCount.css";

const ItemCount = ({ stock, setCount, count }) => {

  const onRemove = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const onAdd = () => {
    if (count >= stock) {
      return;
    }
    setCount(count + 1);
  };

  return (
    <>
      <div className="div__button">
        <button className="button1" onClick={onRemove} disabled={count <= 1}>
          {" "}
          <GrFormSubtract />
        </button>
        <span className="card_numero_contador">{count}</span>
        <button className="button1" onClick={onAdd} disabled={count >= stock}>
          <GrFormAdd />
        </button>
      </div>
    </>
  );
};

export default ItemCount;

  // const  [items, setItems] = useState(0);

  // const suma = () => items < stock ? setItems(items + 1) : alert('Se alcanzo el limite de stock');
  // const resta = () => items > 0 ? setItems(items - 1) : alert('No se pueden meter valores negativos');