import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import './header.css'
import MenuHamb from '../MenuHamburguesa/MenuHamb';


export default function Header() {
    const [render, setRender] = useState(false);

    function handleRender() {
        setRender(!render)
    }
    return (
        <div className='nav-header'>
            <h2 className='nav-title'>JUAN BARBERIS </h2>
           <FiMenu onClick={handleRender} className='menuhamburguesa'/>
            {render ? <MenuHamb handleRender={handleRender} /> : ""}

            <div className='nav-link'>
                <a className='link'href='#inicio' >Inicio</a>
                <a className='link'href='#habilidades' >Habilidades</a>
                <a className='link'href='#proyectos' >Proyectos</a>
                <a className='link'href='#contacto' >Contacto</a>
            </div>
        </div>
    )
}
