import Dropdown  from "./Dropdown";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { AiOutlineSearch } from "react-icons/ai";
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

          <div>
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
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavBar;

// principal dif de componentes de clases y funcionales: componente de clase puede manejar un estado propio y el componente funcional no puede. Crearon los hooks para poder utilizar el estado
// rafce : componente funcional
// react fragment <> </> por q los componentes deben retornar solo un elemento es como un div para encapsular todo y q me permita tener hermanos.
