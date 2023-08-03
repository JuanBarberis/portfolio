import React from 'react'
import { Link as Anchor } from 'react-router-dom'
import linkedin from '../../images/linkedin.png'
import gmail from '../../images/gmail.png'
import github from '../../images/github.png'
import './footer.css'
function Footer() {
    return (
        <div className='footer'>
            <h1>JUAN BARBERIS</h1>
            <div className='nav-footer'>
                <a className='footer-link' href='#inicio' >Inicio</a>
                <a className='footer-link' href='#habilidades' >Habilidades</a>
                <a className='footer-link' href='#proyectos' >Proyectos</a>
                <a className='footer-link' href='#contacto' >Contacto</a>
            </div>
            <div className='icon-footer'>
                <img className='footer-icon' src={linkedin} alt='linkedin' />
                <img className='footer-icon' src={github} alt='github' />
                <img className='footer-icon' src={gmail} alt='gmail' />
            </div>
            <h3 className='footer-copy'>Copyright © | Juan Barberis</h3>
        </div>
    )
}

export default Footer