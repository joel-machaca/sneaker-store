
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CategoryImg from './components/CategoryImg'
import ItemListContainer from './components/ItemListContainer'
import Contactos from './components/Contactos'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContextProvider from './context/CartContext'
import Cart from './components/Cart'

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <CategoryImg/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:id' element={<ItemListContainer/>}/>
            <Route path='/contacto' element={<Contactos/>}/>
            <Route path='/categoria/hombre/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}
export default App
