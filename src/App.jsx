// nada hecho con fetch, promesa local
import './styles/styles.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function AppContent() {
    const location = useLocation();
    const isErrorPage = location.pathname !== '/' &&
        location.pathname !== `/category/${location.pathname.split('/')[2]}` &&
        location.pathname !== `/item/${location.pathname.split('/')[2]}`;

    return (
        <>
            {!isErrorPage && <NavBar />}
            <Routes>
                <Route path='' element={<ItemListContainer mensaje="Bienvenidos a Ekos" />} />
                <Route path='/category/:type' element={<ItemListContainer mensaje="Estas en la categoria: " />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}

export default App
