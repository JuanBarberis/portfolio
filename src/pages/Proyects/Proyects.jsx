import React, { useState } from 'react'
import './proyects.css'
import amazing from '../../images/amazingevents.jpg'
import matear from '../../images/matear.jpg'
import minga from '../../images/minga.jpg'
import { NavLink } from 'react-router-dom'
import { AiOutlineEye } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

function Proyects() {
  const [card, setCard] = useState(false)
  const data = [
    {
      name: 'Amazing Events',
      tecnologia: ['HTML', ',', 'CSS', ',', 'JAVASCRIPT'],
      imagen: amazing,
      proyecto: 'https://jb-amazing-events.vercel.app/',
      github: 'https://github.com/JuanBarberis/Juan-Barberis-Amazing-Events'
    },
    {
      name: 'Minga Comics',
      tecnologia: ['CSS', ',', 'JAVASCRIPT', ',', 'REACT.js'],
      proyecto: 'https://jr-minga-front.vercel.app/',
      imagen: minga,
      github: 'https://github.com/JuanBarberis/minga-front-1'
    },
    {
      name: 'Mate.Ar',
      tecnologia: ['CSS', ',', 'JAVASCRIPT', ',', 'REACT.js'],
      imagen: matear,
      proyecto: 'https://mate-ar.vercel.app/',
      github: 'https://github.com/JuanBarberis/matear-front'
    },
  ]

  const effectCard = () => {
    if(window.scrollY >= 850){
      setCard(true)
    } else{
      setCard(false)
    }
  }

  window.addEventListener('scroll', effectCard)

  return (
    <>
      <div className='div-proyect' id='proyect'>
        <h1 className='h1-title'>PROYECTOS</h1>
        <div className='div-text'>
          {
            data.map((item) => {
              return (
                <div className={card ? 'card active' : 'card'}>
                  <div className='div-conteiner'>
                    <img className='img-proyect' src={item.imagen} alt={item.name} />
                    <div >
                      <h3 className='title-proyect'>{item.name}</h3>
                      <p className='parraf-proyect'>{item.tecnologia}</p>
                    </div>
                  </div>
                  <div className='div-button'>
                    <NavLink to={item.proyecto} className='button-demo'><AiOutlineEye />Demo</NavLink>
                    <NavLink to={item.github} className='button-repo'><AiFillGithub /> Repo</NavLink >
                  </div>
                </div>

              )
            })
          }
        </div>

      </div>
    </>
  )
}

export default Proyects