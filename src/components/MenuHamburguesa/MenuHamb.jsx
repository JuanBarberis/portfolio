import React from 'react'
import './menuhamb.css'
import { CgClose } from "react-icons/cg";
import { NavLink } from 'react-router-dom';

export default function MenuHamb({ handleRender }) {

    return (
        <>
            <nav className='nav-container'>
                <CgClose onClick={handleRender} className='close-menu' />
                <div className='profile'>
                    <NavLink to={'/home'} className='link' >Inicio</NavLink>
                    <NavLink to={'/skills'} className='link'  >Habilidades</NavLink>
                    <NavLink to={'/proyects'} className='link'  >Proyectos</NavLink>
                    <NavLink to={'/contact'} className='link'  >Contacto</NavLink>
                </div>
            </nav >
        </>
    )
}