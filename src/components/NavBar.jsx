// incluir la navegación de la librería  
// el logo debe redigirir al inicio
import "../styles/styles.css"
import { useState } from "react"
import CartWidget from "./CartWidget"
import {NavLink , Link} from 'react-router-dom'

const NavBar = () => {
    
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdown = () => setShowDropdown(!showDropdown);
    const closeDropdown = () => setShowDropdown(false);
    
    return(
        <nav className="nav-container">
            <NavLink to="/">
                <img src="../logo.png" alt="logo" />
            </NavLink> 
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li
                    className="dropdown"
                    onMouseEnter={handleDropdown}
                    onMouseLeave={closeDropdown}
                >
                    <NavLink to="#">Productos</NavLink>
                    {showDropdown && (
                        <ul className="dropdown-menu">
                            <li><NavLink to="/category/aros">Aros</NavLink></li>
                            <li><NavLink to="/category/pulseras">Pulseras</NavLink></li>
                            <li><NavLink to="/category/collares">Collares</NavLink></li>
                        </ul>
                    )}
                </li>
                <li><NavLink to="">Contacto</NavLink></li>
                <li><NavLink to="">Dónde encontrarnos</NavLink></li>
                <li><NavLink to="">Política de cambio</NavLink></li>
            </ul>
            <div >
                <NavLink to={"/cart"}>
                    <CartWidget/>
                </NavLink>
            </div>
        </nav>
    )
}
export default NavBar