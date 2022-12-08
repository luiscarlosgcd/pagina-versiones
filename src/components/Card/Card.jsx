import React, {useEffect, useState} from 'react';
import './Card.css'
import { getMonitor } from '../../api/Monitor';


const Card = () => {

    const [monitores, setMonitor] = useState(null)

    useEffect(() => {
    getMonitor(setMonitor)
    },[])

    const list = []
    let contador = 0
    let contador2 = 0, contador3 = 0
    let post1 = []
    let post2 = []

   
    /*lista con cada id presente*/
    /*if(monitores != null){ 
        for(let i = 0; i < monitores.length; i++){
            if(contador == 0){
                list[contador] = monitores[i].clienteId
                contador++
            } else if (!exist(list, monitores[i].clienteId)){
                list[contador] = monitores[i].clienteId
                contador++
            }
        }
    
    }*/

    if(monitores != null){
        monitores.map((monitor) => {
            if(contador == 0){
                list[contador] = monitor.clienteId
                contador++
            } else if (!exist(list, monitor.clienteId)){
                list[contador] = monitor.clienteId
                contador++
            }
        })
    }

    function exist(list, data){
        list.map((li) => {
            if(li == data){
                return true
            }
            return false
        })
    }

    function existencia(list, data){
        for(let i = 0; i < list.length; i++){
            if(list[i] == data){
                return true
            }
        }
        return false
    }


    return (

        <div>
            {
                (() => {
                    
                    for(let i = 0; i < monitores.length; i++){/*bucle para cada monitor*/
                    post2 = []
                        if(list[contador2] != monitores[i].clienteId){ /*estamos registrando un nuevo cliente*/
                            contador2++
                        }
                        

                        if(list[contador2] == monitores[i].clienteId && (contador3 <= contador2)){
                            
                            
                            contador3++
                            /*
                            if(contador3 > contador2){
                                continue
                            }*/
                            post1.push(
                                <div className='tarjeta'>
                                    <div className='tarjeta__grupo'>
                                        <b>{monitores[i].nombre}</b>
                                    </div>

                                    { /* aqui es el problema */
                                        (() => {
                                            
                                            for(let k = 0; k < monitores.length; k++){
                                                
                                                if (monitores[k].clienteId == list[contador2]){

                                                    post2.push(
                                                        <div className= 'tarjeta__tipo'>

                                                            <div className='tarjeta__grupo-tipo'>
                                                                <a>{monitores[k].tipo}</a>
                                                            </div>

                                                            <div className='tarjeta__grupo-datos'>
                                                                <div className='tarjeta__grupo-datos-fila'>
                                                                    <a className='tarjeta__grupo-dato'>{monitores[k].ipAddress}</a>
                                                                    <a className='tarjeta__grupo-dato'>{monitores[k].macAddress}</a>
                                                                    <a className='tarjeta__grupo-dato'>{monitores[k].version}</a>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    )
                                                }
                                            }

                                            return post2

                                        })()
                                    }

                                </div>
                            )
                        }
                    }

                    return post1
                    
                })()
            }
            

        </div>
    )
}

export default Card