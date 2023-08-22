import React from 'react'

import './home.css'
import imgPortada from '../../images/portada.png'
import { Typewriter } from 'react-simple-typewriter'
import { BiDownload } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

function Home() {


    return (
        <>
            <div className='div-home' id='home'>
                <div className='div-imgportada'>
                    <img className='img-portada' src={imgPortada} alt='img-portada' />
                </div>
                <div className='div-portada'>
                    <h1 className='home-title'>Hola ! Soy
                        <h2 className='title-name'>{`< Juan Barberis / >`}</h2>
                    </h1>
                    <p className='home-p'>Developer Full-Stack  {' '}
                        <span
                            style={{ color: 'rgba(238, 238, 63, 0.74)' }}>
                            <Typewriter
                                words={['MERN', '& Mobile Apps']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={90}
                                deleteSpeed={120}
                            />
                        </span>
                    </p>
                    <p className='home-parraf'>
                        Full-Stack Developer de aplicaciones Web & Mobile Apps <br />
                        poseo conocimientos técnicos en front-end y back-end.
                    </p>
                    <NavLink to={'https://drive.google.com/file/d/1DrGJloIEOig1i8p_VWF4j1dStl3k-kK3/view'} className='download-cv'> Descargar CV <BiDownload /></NavLink >

                </div>

            </div>
        </>
    )
}

export default Home