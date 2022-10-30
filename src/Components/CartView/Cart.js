import React from "react";
import { useContext,  useEffect, useState} from "react";
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
import './Cart.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const CartView2 = () => {
    const { cart, removeItem, subTotal, clear, } = useContext(CartContext);
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
  

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
      window.scrollTo(0,0);
    });
    
    return (
      <div className=" mt-4 mb-5 container" style={{ minHeight: "90vh"}}>
        {cart.length === 0 ? (
          <>
            <h2>No hay productos en tu carrito</h2>
            <Link className="link-seguir-comprando" to={"/products"}>Volver A Comprar</Link>
          </>
        ) : (
          <>
{/*             <div className='text-center'>
              <h1>Carrito</h1>
            </div> */}

          {cart.map((item) => (
            <div key={item.id}>
            <hr className='hr-cart'></hr>
            <div  className='  grid-principal'>

                  <div className='grid-hijo'>
                      <img style={{ width: 200, height: 200, objectFit: "cover" }}
                            src={item.image}
                            alt={`${item.title}`}/>
                  </div>

                  <div className='grid-hijo2'>
                      <div className='div-detalle'> 

                          <h5>{item.title}</h5>
                          <p className='cart-id'>#{item.id}</p>
                          <p className='fw-bold'>{item.quantity}</p>

                      </div>
                      <div className='div-precio'>
                          <p className='cart-precio'>                $
                      {item.quantity > 1
                        ? item.price * item.quantity
                        : item.price}</p>
                          <button className='boton-eliminar'
                          onClick={() => removeItem(item.id)}>Eliminar</button>
                      </div>
                  </div>
                  
            </div>

            </div>
          ) )}
          <hr className='hr-cart'></hr>
          <div className='flex-column'>

              <div className='contenedor-principal-total'>
                  <div className='contenedor-totales'>
                    <p className='fw-bold' >Subtotal</p>
                    <p className='fw-bold'>${subTotal()}</p>
                  </div>

                  <div className='text-start'>Shipping and taxes will be calculated at checkout</div>
              </div>

              <div className='flex-column1'>
                <button className='terminar-compra' onClick={handleShow}>Realizar compra</button>
                <p>o               <Link className="link-seguir-comprando" to={"/products"}>
                Seguir comprando
              </Link></p>
              </div>

          </div>
            


      {/* Modal Form */}
          <>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Ingrese sus datos para poder realizar su compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre completo"
              autoFocus
              name="name"
              id="valorName"
              value={order.buyer.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Telefono:</Form.Label>
            <Form.Control
              type="number"
              placeholder="1122334455"
              id="valorPhone"
              autoFocus
              name="phone"
              value={order.buyer.phone}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@ejemplo.com"
              id="valorEmail"
              autoFocus
              name="email"
              value={order.buyer.email}
              onChange={handleInputChange}
            />
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="boton-cerrar-modal" onClick={handleClose}>
          Cerrar
        </Button>
        <Button className="boton-crear-orden" onClick={createOrder}>
          Realizar orden
        </Button>
      </Modal.Footer>
    </Modal>
  </>
        
          </>
        )}
      </div>
    );
  };
  
  export default CartView2;
  





