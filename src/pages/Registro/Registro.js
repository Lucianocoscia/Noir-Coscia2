import React from "react";
import './Registro.css';

const Registro = () => {
  return (
    <div className="container contenedor-registro">
        <p className="text-center titulo-registro">Comprá más rápido y llevá el control de tus pedidos, ¡en un solo lugar!</p>
        <div className="contenedor-form-registro">
          <label>Nombre</label>
          <input type={'text'} className='form-control'/>

          <label>Email</label>
          <input type={'text'} className='form-control'/>

          <label>Teléfono</label>
          <input type={'text'} className='form-control'/>

          <label>Contraseña</label>
          <input type={'text'} className='form-control'/>

          <div className="contenedor-boton-login mt-3">
            <button className=" text-center boton-login">Crear Cuenta</button>
            <p> ¿Ya tenés una cuenta? <a className="enlace-registro" href="/login">Iniciar Sesión</a></p>
          </div>
        </div>


    </div>

  );
};

export default Registro;
