import React from 'react'
import './header.css'
export default function Header() {
    return (
        <div className='nav-header'>
            <h2 className='nav-title'>JUAN BARBERIS </h2>
            <div className='nav-link'>
                <a href='#inicio' className='a-link'>Inicio</a>
                <a href='#habilidades' className='a-link'>Habilidades</a>
                <a href='#proyectos' className='a-link'>Proyectos</a>
                <a href='#contacto' className='a-link'>Contacto</a>
            </div>
        </div>
    )
}
