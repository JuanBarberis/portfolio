import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import './header.css'
import MenuHamb from '../MenuHamburguesa/MenuHamb';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function Header() {
    const [render, setRender] = useState(false);
    const [navbar, setNavnar] = useState(false)

    const handleRender = () => {
        setRender(!render)
    }

    const changeBackground = ()=>{
        if(window.scrollY >= 100){
            setNavnar(true)
        }else{
            setNavnar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <div className={navbar ? 'navbar active' : 'navbar'}>
            <h2 className='nav-title'>JUAN BARBERIS </h2>
            <FiMenu onClick={handleRender} className='menuhamburguesa' />
            {render ? <MenuHamb handleRender={handleRender} /> : ""}

            <div className='nav-link'>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={800} className='link' >Inicio</Link>
                <Link activeClass="active" to="skill" spy={true} smooth={true} offset={-100} duration={800} className='link'  >Habilidades</Link>
                <Link activeClass="active" to="proyect" spy={true} smooth={true} offset={-100} duration={800} className='link'  >Proyectos</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={800} className='link'  >Contacto</Link>
            </div>
        </div>
    )
}
