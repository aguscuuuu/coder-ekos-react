import "../styles/styles.css"
import CartWidget from "./CartWidget"
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="nav-container">
            <NavLink to="index.html">
                <img src="../logo.svg" alt="logo" />
            </NavLink> 
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="">Productos</NavLink></li>
                <li><NavLink to="">Contacto</NavLink> </li>
                <li><NavLink to="">Dónde encontrarnos</NavLink></li>
                <li><NavLink to="">Política de cambio</NavLink></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}
export default NavBar