import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Home/Home'
import Carousel from './components/Carousel/Carousel'
import Cards from './components/Cards/Cards'
import Login from './Login_signUp/Login'
import Signup from './Login_signUp/Signup'
import PersonalInfo from './Health_Checkup/PersonalInfo'


function App() {

  return (
    <>
      <div>

        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='treatment' element />
            <Route path='aboutus' element />
            <Route path='contactus' element />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Login />} /> 
            <Route path='/health' element={<PersonalInfo/>} />
            {/*{Default route }
           

            {/* <Route path='/login' element={<Login/>} /> */}
            {/* <Route path='/signup' element={<Signup/>} /> */}
            {/* <Route path="#" element={<AuthPage />} /> */}
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
