import "../styles/styles.css"
import CartWidget from "./CartWidget"
const NavBar = () => {
    return(
        <nav className="nav-container">
            <a href="index.html">
                <img src="../logo.svg" alt="logo" />
            </a> 
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Contacto</a> </li>
                <li><a href="">Dónde encontrarnos</a></li>
                <li><a href="">Política de cambio</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}
export default NavBar