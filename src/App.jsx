import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'
import Error from './components/Error'
import { CartProvider } from './context/CartContext'

function AppContent() {
    const location = useLocation()
    const isErrorPage =
        location.pathname !== '/' &&
        location.pathname !== `/category/${location.pathname.split('/')[2]}` &&
        location.pathname !== `/item/${location.pathname.split('/')[2]}` &&
        location.pathname !== '/cart' &&
        location.pathname !== '/checkout'

    return (
        <>
            {!isErrorPage && <NavBar />}
            <Routes>
                <Route path='/' element={<ItemListContainer mensaje="Bienvenidos a Ekos" />} />
                <Route path='/category/:type' element={<ItemListContainer mensaje="Estas en la categoría: " />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartContainer />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <AppContent />
            </CartProvider>
        </BrowserRouter>
    )
}

export default App
