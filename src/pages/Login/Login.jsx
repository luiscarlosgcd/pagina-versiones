import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

const login = () => {
  return (
    
    <div>
      <h1>Iniciar sesion</h1>
      <div className = 'login'>
          <form>
            <div>
              <div>
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
                <button className='login__boton'><Link id='boton' to='/home'>Enviar</Link></button> 
              </div>
            </div>
          </form>
      </div>
    </div>
  )
}



export default login