import React from "react";
import "./Item.css";

const Item = ({ title, price, image }) => {
  return (
    <>
      <img className="card_img" src={image} alt={title} />
      <h3 className="card_title">{title}</h3>
      <h4 className="card_price">${price}</h4>
    </>
  );
};

export default Item;
