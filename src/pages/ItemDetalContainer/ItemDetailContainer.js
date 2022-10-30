import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { Link } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { AiOutlineLeft } from "react-icons/ai";

const ItemDetailContainer = () => {
  const { id } = useParams();
  // console.log(id);

  const [productDetail, setProductDetail] = useState([]);

  // firebase
  const db = getFirestore(); // retorna la base de datos

  const getProduct = () => {
    const queryDoc = doc(db, "items", id);

    getDoc(queryDoc)
      .then((response) => {
        console.log(response.id);
        console.log(response.data());
        // setProductDetail(response.data());
        setProductDetail({ id: response.id, ...response.data() });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 0);
    window.scrollTo(0,0);
  }, [id]);

  return (
    <>
      <div className="container contenedor-detalle1">

        <div className="contenedor_detalle">
          <ItemDetail product={productDetail} />
        </div>
        <Link className="link-volver" to={"/products"}><AiOutlineLeft className="icono-volver"/>Volver a Productos</Link>
      </div>

    </>
  );
};

export default ItemDetailContainer;

