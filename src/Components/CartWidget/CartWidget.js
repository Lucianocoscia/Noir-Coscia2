// icono y ubicarlo en navbar
import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  if (cart.length > 0) {
    return (
      <>
        <button className="carrito button_Cart">
          {" "}
          <AiOutlineShoppingCart />
          <span>{cart.length}</span>
        </button>
      </>
    );
  } else {
    return;
  }
};

export default CartWidget;
