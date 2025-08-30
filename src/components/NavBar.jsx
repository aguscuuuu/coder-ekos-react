import "../styles/NavBar.css"
import CartWidget from "./CartWidget"
const NavBar = () => {
    return(
        <nav className="nav-container">
            <a href="">
                <img src="../logo.svg" alt="logo" />
            </a> 
            <a href="">Inicio</a> 
            <a href="">Productos</a> 
            <a href="">Contacto</a> 
            <a href="">Dónde encontrarnos</a>
            <a href="">Política de cambio</a>
            <CartWidget/>
        </nav>
    )
}
export default NavBar