import React, {useEffect, useState} from 'react';
import { GiConsoleController } from 'react-icons/gi';
import { getMonitor } from '../../api/Monitor';

const Cards = () => {

    const [monitores, setMonitor] = useState(null)

    useEffect(() => {getMonitor(setMonitor)},[])
    let list = [], post1 = [], post2 = []
    let contador1 = 0, contador2 = 0, contador3 = 0

    function exist(list, data){
        let final = false
        list.map((li) => (
            li == data && (final = true)
        ))
        return final
    }

    function create(monitores){
        let contador = 0
        let list = []
        monitores != null && monitores.map(
            (monitor) => ((contador === 0) ? 
            (list[contador] = monitor.clienteId, contador++): 
            ((!exist(list, monitor.clienteId)) && (list[contador] = monitor.clienteId, contador++)))
        )
        return list
    }

    {list = create(monitores)}



    return (
        
        <div>
            {
                monitores != null && monitores.map((monitor) => {
                    post2 = []

                    list[contador1] != monitor.clienteId && contador1++

                    if(list[contador1] == monitor.clienteId && (contador2 <= contador1)){
                        contador2++
                        post1.push(
                            <div className='tarjeta'>
                                <div className='tarjeta__grupo'>
                                        <b>{monitor.nombre}</b>
                                </div>
                                {
                                    monitores.map((monitor) => {
                                        monitor.clienteId == list[contador1] && post2.push(
                                            <div className= 'tarjeta__tipo'>

                                                <div className='tarjeta__grupo-tipo'>
                                                    <a>{monitor.tipo}</a>
                                                </div>

                                                <div className='tarjeta__grupo-datos'>
                                                    <div className='tarjeta__grupo-datos-fila'>
                                                        <a className='tarjeta__grupo-dato'>{monitor.ipAddress}</a>
                                                        <a className='tarjeta__grupo-dato'>{monitor.macAddress}</a>
                                                        <a className='tarjeta__grupo-dato'>{monitor.version}</a>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                                {post2}
                            </div>
                        )
                    }
                })

            }

            {post1}
        </div>

    )
}

export default Cards