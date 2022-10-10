import React from "react";
import "../Item/Item.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2'

const ItemDetail = ({ product }) => {

  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  function onAdd(product) {
    addToCart(product, count);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: `${product.title} agregado al carrito`
    })
  }

  const [loader, setLoader] = useState(true); 
  useEffect (() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000)
  });


if(loader){
  return(
    <>
    <div className=" contenedor-spinner">
      <div className="  spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>

  </> 
  )
} else{
 return(
  <>
  <img className="img-detalle" src={product.image} alt={product.title} />

  <div className="contenedor-detalle">
    <h3 className="titulo-detalle">{product.title}</h3>
    <hr className="hr-detalle" />
    <h3 className="descripcion-detalle">{product.description}</h3>
    <h5 className="precio-detalle">Precio: ${product.price}</h5>
    <ItemCount setCount={setCount} count={count} stock={product.stock} />
    <Link
      to={"/cart"}
      onClick={() => onAdd(product)}
      className="boton-agregar"
    >
      Agregar al carrito
    </Link>
  </div>
</>
 )
}
  
  }


export default ItemDetail;
