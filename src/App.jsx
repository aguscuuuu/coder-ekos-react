import './App.css'
import NavBar from './components/Navbar'
import Button from "./examples/Button"
import ItemCount from "./components/ItemCount"
import ItemListContainer from "./components/ItemListContainer"
import CartWidget from "./components/CartWidget"

function App() {
  const saludar = () => {
    alert("Hola")
  }
  
  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje="Bienvenidos a Ekos"/>
      <Button text="Hola" clickHandler={saludar}/>
      <Button text="Uso de nuevo"/>
      <ItemCount/>
    </>
  )
}
export default App
