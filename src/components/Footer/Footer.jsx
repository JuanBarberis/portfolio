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
                <Anchor className='footer-link' to={'#inicio'} >Inicio</Anchor>
                <Anchor className='footer-link' to={'#habilidades'} >Habilidades</Anchor>
                <Anchor className='footer-link' to={'#proyectos'} >Proyectos</Anchor>
                <Anchor className='footer-link' to={'#contacto'} >Contacto</Anchor>
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