import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
    <div className="contenedor-login container">
        <div className=" contenedor-form-login">
          <label>Email</label>
          <input className="form-control" type={"text"}/>

          <label>Contraseña</label>
          <input type={'text'} className='form-control' />
          <p className="enlace-forgot"> ¿Olvidaste tu contrañesa?</p>
          <div className="contenedor-boton-login">
            <button className="boton-login">Iniciar Sesión</button>
            <p> ¿No tenés una cuenta? <a className="enlace-registro" href="/registro">Crear cuenta</a></p>
          </div>


        </div>
    </div>


    </>
  );
};

export default Login;
