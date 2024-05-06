import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import About from './pages/About ';
import Contact from './pages/Contact ';
import Loginpage from './pages/Loginpage';
import Shop from './pages/Shop';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Loginpage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
