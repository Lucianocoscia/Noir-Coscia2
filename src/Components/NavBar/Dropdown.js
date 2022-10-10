import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";

function BasicExample() {
  return (
    <Dropdown >
      <Dropdown.Toggle  variant="style-dropdown" id="dropdown-basic" >
        Productos
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/products" className="ul_enlace">Ver todos</Dropdown.Item>
        <Dropdown.Item href="/category/Abrigos">Abrigos</Dropdown.Item>
        <Dropdown.Item href="/category/Pantalones" >Pantalones</Dropdown.Item>
        <Dropdown.Item href="/category/Remeras">Remeras</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;

// <NavLink  to={"/products"}>Ver todos</NavLink>
// <NavLink to={"/category/Abrigos"}>Abrigos</NavLink>
// <NavLink  to={"/category/Pantalones"}>Pantalones</NavLink>
// <NavLink  to={"/category/Remeras"}>Remeras</NavLink>