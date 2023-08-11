import React from 'react'
import './menuhamb.css'
import { CgClose } from "react-icons/cg";
import { Link } from 'react-scroll';

export default function MenuHamb({ handleRender }) {

    return (
        <>
            <nav className='nav-container'>
                <CgClose onClick={handleRender} className='close-menu' />
                <div className='profile'>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={800} className='link' >Inicio</Link>
                <Link activeClass="active" to="skill" spy={true} smooth={true} offset={-100} duration={800} className='link'  >Habilidades</Link>
                <Link activeClass="active" to="proyect" spy={true} smooth={true} offset={-100} duration={800} className='link'  >Proyectos</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={800} className='link'  >Contacto</Link>
                </div>
            </nav >
        </>
    )
}