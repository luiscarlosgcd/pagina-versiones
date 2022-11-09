import React from 'react'
import './Login.css';

import {useState} from 'react';

const login = () => {
  return (
    
    <div>
      <h1>Iniciar sesion</h1>
      <div className = 'login'>
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