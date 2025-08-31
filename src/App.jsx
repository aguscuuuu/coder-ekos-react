import './styles/styles.css'
import NavBar from './components/Navbar'
import Button from "./examples/Button"
import ItemCount from "./components/ItemCount"
import ItemListContainer from "./components/ItemListContainer"
import CartWidget from "./components/CartWidget"

function App() {
  
  return (
    <>
      <NavBar/>
      <main>
        <ItemListContainer mensaje="Bienvenidos a Ekos"/>
        <ItemCount/>
      </main>
    </>
  )
}
export default App
