import React from 'react'
import './home.css'
import imgPortada from '../../images/portada.png'
function Home() {
    return (
        <>
            <div className='div-home'>
                <div className='div-imgportada'>
                    <img className='img-portada' src={imgPortada} alt='img-portada' />
                </div>
                <div className='div-portada'>
                    <h1 className='home-title'>Hola ! Soy {`< Juan Barberis / >`}</h1>
                    <p className='home-p'>Desarrollador Full-Stack de aplicaciones web & mobiles</p>
                </div>
            </div>
        </>
    )
}

export default Home