import Dropdown  from "./Dropdown";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { AiOutlineSearch } from "react-icons/ai";
/* import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai"; */
import Oferta from "./Oferta";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <>
      <Oferta oferta="Envios gratis a partir de $15.000" />
      <header>
        <nav className="navbar1">
          <div className="navbar_buscador">
            <input className="buscador_input" placeholder="Buscar..."></input>
            <button className="buscador_img">
              <AiOutlineSearch />
            </button>
          </div>

          <div className="navbar-mobile">
            <NavLink className="navbar_h1" to={"/"}>
              Noir.
            </NavLink>
          </div>

          <div className="navbar_items">
              <NavLink to={"/registro"} className="link">
                Crear Cuenta
              </NavLink>
              <NavLink to={"/login"} className="link">
                Iniciar Sesión
              </NavLink>
              <Link to={"/cart"} className="button_Cart">
                <CartWidget />
              </Link>
          </div>
        </nav>

        <div className="contenedor_links">

          <ul className="navbar_ul">



            <li>
              <NavLink to={"/"} className="ul_enlace">
                Inicio
              </NavLink>
            </li>
            <li ><Dropdown  /></li>

            <li>
              <NavLink className={"ul_enlace"} to={"/contact"}>
                Contacto
              </NavLink>
            </li>
            <li className="cart-mobile">
              <Link to={"/cart"} className="button_Cart">
                <CartWidget />
              </Link>
            </li>

          </ul>
        </div>


      </header>
    </>
  );
};

export default NavBar;

