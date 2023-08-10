import React from 'react'
import './mainlayaout.css'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Home from '../../pages/Home/Home'
import Skills from '../../pages/Skills/Skills'
import Proyects from '../../pages/Proyects/Proyects'
import Contact from '../../pages/Contact/Contact'

function MainLayout() {
  return (
    <>
      <Header/>
      <Home  />
      <Skills />
      <Proyects />
      <Contact />
      <Footer/>    
    </>
    // <div className='mainlayout'>
    //   
    //   <Skills />
    //   <Proyects />
    //   <Contact />
    // </div>
  )
}

export default MainLayout