import React from 'react'
import Home from '../../pages/Home/Home'
import Skills from '../../pages/Skills/Skills'
import Contact from '../../pages/Contact/Contact'
import './mainlayaout.css'
import Proyects from '../../pages/Proyects/Proyects'

function MainLayout() {
  return (
    <div className='mainlayout'>
      <Home />
      <Skills />
      <Proyects />
      <Contact />
    </div>
  )
}

export default MainLayout