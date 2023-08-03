import React from 'react'
import './menuhamb.css'
import { CgClose } from "react-icons/cg";

export default function MenuHamb({ handleRender }) {

    return (
        <>
            <nav className='nav-container'>
                <CgClose onClick={handleRender} className='close-menu' />
                <div className='profile'>
                    <a className='link' href='#inicio' >Inicio</a>
                    <a className='link' href='#habilidades' >Habilidades</a>
                    <a className='link' href='#proyectos' >Proyectos</a>
                    <a className='link' href='#contacto' >Contacto</a>
                </div>
            </nav >
        </>
    )
}