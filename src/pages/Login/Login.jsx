import React from 'react'
import './Login.css';

import {useState} from 'react';

const login = () => {
  return (
    
    <div className = 'login'>
      <h1 id="loginHeader">Iniciar sesion</h1>
      <div className = 'login__form'>
          <form>
            <div className>

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
              <div className = 'login__input'>
                <input type="submit"></input>
              </div>
            </div>
          </form>
      </div>

    </div>
  )
}



export default login