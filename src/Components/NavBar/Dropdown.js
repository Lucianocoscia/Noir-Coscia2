import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";

function BasicExample() {
  return (
    <Dropdown >
      <Dropdown.Toggle  variant="style-dropdown" id="dropdown-basic" >
        Productos
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  className="ul_enlace"><NavLink to="/products">Ver Todos</NavLink></Dropdown.Item>
        <Dropdown.Item><NavLink to="/category/Abrigos">Abrigos</NavLink></Dropdown.Item>
        <Dropdown.Item ><NavLink to="/category/Pantalones">Pantalones</NavLink></Dropdown.Item>
        <Dropdown.Item><NavLink to="/category/Remeras">Remeras</NavLink></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;
