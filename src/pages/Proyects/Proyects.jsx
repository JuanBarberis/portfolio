import React from 'react'
import amazing from '../../images/amazingevents.jpg'
import matear from '../../images/matear.jpg'
import minga from '../../images/minga.jpg'

function Proyects() {
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

  return (
    <>
      <div>
        {
          data.map((item) => {
            return (
              <div>
                <div>
                  <img src={item.imagen} alt="" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.tecnologia}</p>
                  </div>
                </div>
                <div>
                  <button>demo</button>
                  <button>repo</button>
                </div>
              </div>

            )
          })
        }

      </div>
    </>
  )
}

export default Proyects