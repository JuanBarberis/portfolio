import React from 'react'
import './menuhamb.css'
import { CgClose } from "react-icons/cg";

export default function MenuHamb({ handleRender }) {

    return (
        <>
            <nav className='nav-container'>
                <CgClose onClick={handleRender} className='close-menu' />
                <div className="profile">
                    <div className="a-links">
                        <a href='#inicio' className='menu-hamb'>Inicio</a>
                        <a href='#habilidades' className='menu-hamb'>Habilidades</a>
                        <a href='#proyectos' className='menu-hamb'>Proyectos</a>
                        <a href='#contacto' className='menu-hamb'>Contacto</a>
                    </div>
                </div>
            </nav >
        </>
    )
}