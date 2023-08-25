import React, { useState } from 'react'
import './contact.css'

function Contact() {
  const [contacto, setContacto] = useState(false)
  const [data, setData] = useState({
    name: '',
    mail: '',
    message: '',
  })
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const effectCard = () => {
    if(window.scrollY >= 1300){
      setContacto(true)
    } else{
      setContacto(false)
    }
  }

  window.addEventListener('scroll', effectCard)

  return (
    <>
      <div id='contact' >
        <h1 className='contact-title'>CONTACTO</h1>
        <form className={contacto? 'contacto active' : 'contacto'} action="https://formsubmit.co/6d4a06dc809795eb8671e9f32e82bd1e" method="POST"  >
          <label className='label-form' for="name">Nombre</label>
          <input className='input-form' type="text" id="name" name="name" value={data.name} onChange={handleChange} />
          <label className='label-form' for="mail">Correo electrónico</label>
          <input className='input-form' type="email" id="mail" name="mail" value={data.mail} onChange={handleChange} />
          <label className='label-form' for="msg">Mensaje:</label>
          <textarea className='area-form' id="msg" name="message" value={data.message} onChange={handleChange} />
          <button className='button-form' type='submit' id='submit'> Enviar</button>

          <input type='hidden' name='_next' value="https://juanbarberis.vercel.app/" />
          <input type='hidden' name='_captcha' value="false" />
        </form>
      </div>
    </>
  )
}

export default Contact