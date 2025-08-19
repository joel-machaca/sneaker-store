
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CategoryImg from './components/CategoryImg'
import ItemListContainer from './components/ItemListContainer'
import Contactos from './components/Contactos'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <CategoryImg/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:id' element={<ItemListContainer/>}/>
          <Route path='/contacto' element={<Contactos/>}/>
          <Route path='/categoria/hombre/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App
