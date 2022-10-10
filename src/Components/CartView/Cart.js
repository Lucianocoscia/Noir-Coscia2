import React from "react";
import Table from "react-bootstrap/Table";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import swal from "sweetalert";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, subTotal, clear } = useContext(CartContext);
  console.log("cart", cart);

  const navigate = useNavigate();

  /* Inicializo la base de datos */
  const db = getFirestore();

  // Utilizo useState para poder actualizarlo y utilizarlo en todo mi componente
  const [order, setOrder] = useState({
    buyer: {
      name: "",
      phone: 0,
      email: "",
    },
    items: cart,
    total: cart.reduce(
      (valorPasado, valorActual) =>
        valorPasado + valorActual.price * valorActual.quantity,
      0
    ),
    date: moment().format("DD/MM/YYYY, h:mm:ss a"),
  });

  // console.log('orden realizada', order);

  // Creo la orden y primero actuliza el state de la orden, le dejamos el buyer tal cual como esta y actualizamos el item, total y date.
  const createOrder = () => {
    const valorName = document.getElementById("valorName");
    const valorPhone = document.getElementById("valorPhone");
    const valorEmail = document.getElementById("valorEmail");

    if (
      valorName.value === "" ||
      valorPhone.value === "" ||
      valorEmail.value === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Complete los campos del formulario para realizar la orden de compra",
      });
    } else {
      const query = collection(
        db,
        "orden"
      ); /* Busco en mi database la coleccion orden */

      // agrego la nueva orden a la collecion orden de firebase
      addDoc(query, order)
        .then(({ id }) => {
          console.log(id);
          updateStockProduct();
          swal(
            "Felicidades por tu compra",
            `Su id de compra es ${id}`,
            "success"
          );

        })
        .catch(() =>
          swal(
            "Error al realizar la compra.",
            "Tu compra no pudo ser completada, intentalo mas tarde.",
            "error"
          )
        );
    }
  };

  // actualizo la orden segun el stock y cantidades compradas
  const updateStockProduct = () => {
    cart.forEach((product) => {
      const queryUpdate = doc(db, "items", product.id);

      updateDoc(queryUpdate, {
        category: product.category,
        description: product.description,
        image: product.image,
        price: product.price,
        title: product.title,
        stock: product.stock - product.quantity,
      })
        .then(() => {
          // siempre selecciona el ultimo del carrito y su id y lo iguala al id del producto
          if (cart[cart.length - 1].id === product.id) {
            clear();
            navigate("/");
            console.log("stock actualizado");
          }
        })
        .catch(() => {
          console.log("error al actualizar el stock");
        });
    });
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setOrder({
      ...order,
      buyer: {
        ...order.buyer,
        [e.target.name]: e.target.value,
      },
    });
  };

  const formOrden = () => {
    let modalContenedorForm = document.getElementById("ContenedorForm");
    modalContenedorForm.classList.toggle("contenedor-form-active");
  };

  const cerrarForm = () =>{
    let modalContenedorForm = document.getElementById("ContenedorForm");
    modalContenedorForm.classList.remove("contenedor-form-active")
  }

  return (
    <div className=" mt-4 container" style={{ minHeight: "90vh" }}>
      {cart.length === 0 ? (
        <>
          <h2>No hay productos en tu carrito</h2>
          <Link className="link-seguir-comprando" to={"/products"}>Volver A Comprar</Link>
        </>
      ) : (
        <>
          <div className="container">
            <Table className="mt-4" striped bordered hover>
              <thead>
                <tr className="text-center">
                  <th>#ID</th>
                  <th>Producto</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>SubTotal</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>

              {cart.map((item) => (
                <tbody key={item.id} className="text-center">
                  <tr>
                    <td>{item.id}</td>
                    <td>
                      <img
                        style={{ width: 200, height: 200, objectFit: "cover" }}
                        src={item.image}
                        alt={`${item.title}`}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      $
                      {item.quantity > 1
                        ? item.price * item.quantity
                        : item.price}
                    </td>
                    <td></td>
                    <td>
                      <div className="contenedor-boton-eliminar">
                        <button
                          className="boton-eliminar "
                          onClick={() => removeItem(item.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
              <thead>
                <tr className="text-center">
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>{subTotal()}</th>
                  <th></th>
                </tr>
              </thead>
            </Table>
            <div className="contenedor-botones">
              <Link className="link-seguir-comprando" to={"/products"}>
                Seguir comprando
              </Link>
              <button className="boton-eliminar" onClick={clear}>Vaciar Carrito</button>
            </div>
 
            <div className="contenedor-boton-orden">
              <button
                id="botonCrearOrden"
                className="boton-crear-orden"
                onClick={formOrden}
              >
                Terminar Compra
              </button>
            </div>
          </div>

          <div
            id="ContenedorForm"
            className="container contenedor-form text-center mt-4 mb-5"
          >
            <span onClick={cerrarForm} className="cerrar-modal">X</span>
            <h4 className="mb-4">Ingrese sus datos para poder realizar su compra</h4>
            <form>
              <div className="form-group">
                <label className="p-2">Nombre:</label>
                <input
                  type={"text"}
                  className="form-control"
                  id="valorName"
                  value={order.buyer.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </div>
              <div className="form-group">
                <label className="p-2">Telefono:</label>
                <input
                min={0}
                  type={"number"}
                  name="phone"
                  id="valorPhone"
                  value={order.buyer.phone}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="p-2">Email:</label>
                <input
                  type={"email"}
                  id="valorEmail"
                  name="email"
                  value={order.buyer.email}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

            </form>
            <div className="contenedor-boton-orden mt-4">
                <button
                  id="botonCrearOrden"
                  className="boton-crear-orden"
                  onClick={createOrder}
                >
                  Crear Orden
                </button>
              </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
