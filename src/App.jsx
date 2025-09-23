// nada hecho con fetch, promesa local
import './styles/styles.css'
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='' element={<ItemListContainer mensaje="Bienvenidos a Ekos"/>}/>
        <Route path='/category/:type' element={<ItemListContainer mensaje="Estas en la categoria: "/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
