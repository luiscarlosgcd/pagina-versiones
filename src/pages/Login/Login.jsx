import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

const login = () => {
  return (
    
    <div className='login'>
      <div>
        <h1 id='login__heading'>Iniciar sesion</h1>
        <form className = 'login__form'>
          <div>
            <div >
              <label> Nombre:
                <input type = 'text'/>
              </label>
            </div>
            
            <div>
              <label> Contraseña:
                <input type = 'text'/>
              </label>
            </div>

            <div className='login__input'>
              <button className='login__boton'><Link id='boton' to='/monitor'>Enviar</Link></button> 
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}



export default login