import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Pnf from './pages/Pnf'
import View from './pages/View'
import Footer from './components/Footer'
Routes

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/:id/view' element={<View/>}/>
      <Route path='/*' element={<Pnf/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
