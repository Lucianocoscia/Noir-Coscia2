import React from 'react'
import './Contacto.css'
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Contacto = () => {
  return (
    <div className=' container grid-contacto'>
        <div>
            <p>Horarios de atención: de Lun a Vie de 18 a 22hs, Sáb de 11 a 22hs.</p>
            <p className='enlaces-contacto'><span className='iconos-contacto'><FaPhone/></span>  3813627137</p>
            <p className='enlaces-contacto'><span className='iconos-contacto'><FaEnvelope/></span>  noir@info.com</p>
            <p><span className='iconos-contacto'><FaMapMarkerAlt/></span>  Locales: Zavalia 584 (Alt. Av. Aconquija al 400), Yerba Buena, Tucumán / Santa Fé 440, Local 9, Barrio Norte, S. M. de Tuc, Tucumán</p>
            <p className='enlaces-contacto'><span className='iconos-contacto'><FaInstagram/></span>  Siguenos en Instagram</p>
            <p className='enlaces-contacto'><span className='iconos-contacto'><FaFacebookF/></span>  Siguenos en Facebook</p>
        </div>

        <div className='contenedor-form-contacto'>
            <label>Nombre</label>
            <input className='form-control'></input>

            <label>Email</label>
            <input className='form-control'></input>

            <label>Teléfono</label>
            <input className='form-control'></input>

            <label>Mensaje</label>
            <textarea className='form-control'></textarea>

            <div className='contenedor-boton-contacto'><button>Enviar</button></div>
        </div>


    </div>
  )
}

export default Contacto