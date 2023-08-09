import React from 'react'
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
 const data =[
  {
  name: 'HTML',
  img:{html}
},
  {
  name: 'CSS',
  img:{css}
},
  {
  name: 'JAVASCRIPT',
  img:{javascript}
},
  {
  name: 'GIT',
  img:{git}
},
  {
  name: 'GIT-HUB',
  img:{github}
},
  {
  name: 'NODE.JS',
  img:{node}
},
  {
  name: 'MongoDB',
  img:{mongo}
},
]

  return (
    <>
      <h1>soy las habilidades</h1>
      <div>Skills</div>
    </>
  )
}

export default Skills