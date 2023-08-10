import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import './header.css'
import MenuHamb from '../MenuHamburguesa/MenuHamb';
import { NavLink } from 'react-router-dom';


export default function Header() {
    const [render, setRender] = useState(false);

    function handleRender() {
        setRender(!render)
    }
    return (
        <div className='nav-header'>
            <h2 className='nav-title'>JUAN BARBERIS </h2>
            <FiMenu onClick={handleRender} className='menuhamburguesa' />
            {render ? <MenuHamb handleRender={handleRender} /> : ""}

            <div className='nav-link'>
                <NavLink to={'/home'} className='link' >Inicio</NavLink>
                <NavLink to={'/skills'} className='link'  >Habilidades</NavLink>
                <NavLink to={'/proyects'} className='link'  >Proyectos</NavLink>
                <NavLink to={'/contact'} className='link'  >Contacto</NavLink>
            </div>
        </div>
    )
}
