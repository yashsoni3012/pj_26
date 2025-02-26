import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Home/Home'
import Carousel from './components/Carousel/Carousel'
import Cards from './components/Cards/Cards'

function App() {

  return (
    <>
      <div>
        
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='treatment' element /> */}
            {/* hello */}
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
