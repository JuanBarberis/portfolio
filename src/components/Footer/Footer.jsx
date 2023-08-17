import React from 'react'
import './footer.css'
import { Link } from 'react-scroll'
import { AiFillGithub } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { BsLinkedin } from 'react-icons/bs';
import { NavLink, useNavigation } from 'react-router-dom';

function Footer() {
    const navigate = useNavigation()
    return (
        <div className='footer'>
            <h1 className='title-footer'>JUAN BARBERIS</h1>
            <div className='nav-footer'>
                <Link to="home" spy={true} smooth={true} offset={-100} duration={800} className='link-footer' >Inicio</Link>
                <Link to="skill" spy={true} smooth={true} offset={-100} duration={800} className='link-footer'  >Habilidades</Link>
                <Link to="proyect" spy={true} smooth={true} offset={-100} duration={800} className='link-footer'  >Proyectos</Link>
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={800} className='link-footer'  >Contacto</Link>
            </div>
            <div className='icon-footer'>
                <NavLink to={'https://github.com/JuanBarberis'}><AiFillGithub className='icon-github' /></NavLink>
                <NavLink to={'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTtTcPQMfbNjSCXPKgnPKBjmfqdGvGVdvvKGWZBrbmBtWsPHtMMKlPLFxdhhvQVsBTwHJD'}><BiLogoGmail className='icon-github' /></NavLink>
                <NavLink to={'https://www.linkedin.com/in/juancruzbarberis/'}><BsLinkedin className='icon-github' /></NavLink>
            </div>
            <h3 className='footer-copy'>Copyright © | Juan Barberis</h3>
        </div>
    )
}

export default Footer