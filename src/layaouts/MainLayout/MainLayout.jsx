import React from 'react'
import './mainlayaout.css'
import Header from '../../components/Header/Header'
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
  
  )
}

export default MainLayout