import { useState } from 'react'
import './App.css'
import PreLoader from './Components/PreLoader/PreLoader'
import Header from './Components/Header/Header'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import ContactSection from './Components/Contact/Contact';
import SideNavbar from './Components/SideBar/SideBar';
function App() {


  return (
    <>

        <PreLoader/>

        <>
          <BrowserRouter>
          <SideNavbar/>
            <Routes>
              
              <Route path='/' element={<Home/>} />
              <Route path='/contact' element={<ContactSection/>} />
         
            </Routes>
           
          </BrowserRouter>
        </>
    </>
  )
}

export default App
