import React, { useState } from 'react'
import './skills.css'
import html from '../../images/html.png'
import css from '../../images/css.png'
import javascript from '../../images/javascript.png'
import git from '../../images/git.png'
import github from '../../images/github.png'
import react from '../../images/react-js.png'
import node from '../../images/node.png'
import mongo from '../../images/mongodb.png'

function Skills() {
  const [cards, setCards] = useState(false)


  const data = [
    {
      name: 'HTML',
      image: html
    },
    {
      name: 'CSS',
      image: css
    },
    {
      name: 'JAVASCRIPT',
      image: javascript
    },
    {
      name: 'REACT',
      image: react
    },
    {
      name: 'GIT',
      image: git
    },
    {
      name: 'GIT-HUB',
      image: github
    },
    {
      name: 'NODE.JS',
      image: node
    },
    {
      name: 'MongoDB',
      image: mongo
    },
  ]

  const effectCard = () => {
    if(window.scrollY >= 100){
      setCards(true)
    } else{
      setCards(false)
    }
  }

  window.addEventListener('scroll', effectCard)

  return (
    <>
      <div className='skill ' id='skill'>
        <h1 className='skill-h1'>HABILIDADES</h1>
        <div className={cards ? 'cards active' : 'cards'}>
          {
            data.map((item, i) => {
              return (
                <div className='skills'>
                  <img className='skill-img' src={item.image} alt={item.name} />
                  <h2 className='skill-h2'>{item.name}</h2>
                </div>
              )
            })
          }
        </div>

      </div>
    </>
  )
}

export default Skills