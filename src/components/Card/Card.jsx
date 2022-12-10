import React, {useEffect, useState} from 'react';
import { getMonitor } from '../../api/Monitor';
import { BiCaretDown } from 'react-icons/bi'
import { BiCaretUp } from 'react-icons/bi'
import './Card.css';

const Cards = () => {

    const [monitores, setMonitor] = useState(null)

    useEffect(() => {getMonitor(setMonitor)},[])

    const [infoKey, setInfoKey] = useState({});

    const infoClick = (key) => () => {
        setInfoKey(state => ({
            ...state, // <-- copy previous state
            [key]: !state[key] // <-- update value by index key
        }));
    };



    let list = [], post1 = [], post2 = []
    let contador1 = 0, contador2 = 0

    function exist(list, data){
        let final = false
        list.map((li) => (
            li === data && (final = true)
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

    list = create(monitores)


    return (
        
        <div className='tarjeta__almacen'>
            {
                monitores != null && monitores.forEach((monitor) => {
                    post2 = []

                    list[contador1] !== monitor.clienteId && contador1++

                    if(list[contador1] === monitor.clienteId && (contador2 <= contador1)){
                        contador2++
                        post1.push(
                            <div className='tarjeta' key={monitor.macAddress}>

                                <div className='tarjeta__grupo'>
                                    <button>{monitor.nombre}</button>
                                    <div className='tarjeta__open-icon'>
                                        {infoKey[monitor.macAddress] ? <BiCaretUp onClick={infoClick(monitor.macAddress)}/>: <BiCaretDown onClick={infoClick(monitor.macAddress)}/>}
                                    </div>
                                </div>
                                
                                <div className={infoKey[monitor.macAddress] ? 'tarjeta__tipos active' : 'tarjeta__tipos'}>
                                {
                                    
                                    monitores.forEach((monitor) => {
                                        monitor.clienteId === list[contador1] && post2.push(
                                            <div className= 'tarjeta__tipo' key={monitor.macAddress}>

                                                <div className='tarjeta__grupo-tipo'>
                                                    <button>{monitor.tipo}</button>
                                                </div>

                                                <div className='tarjeta__grupo-datos'>
                                                    <div className='tarjeta__grupo-datos-fila'>

                                                        <div className='tarjeta__grupo-conjunto'>
                                                            <div>
                                                                <b className='tarjeta__grupo-dato tarjeta__grupo-datos-titulo'>IP Address</b>
                                                            </div>
                                                            <div>
                                                                <button className='tarjeta__grupo-dato'>{monitor.ipAddress}</button>
                                                            </div>
                                                        </div>

                                                        <div className='tarjeta__grupo-conjunto'>
                                                            <div>
                                                                <b className='tarjeta__grupo-dato tarjeta__grupo-datos-titulo'>MAC Address</b>
                                                            </div>
                                                            <div>
                                                                <button className='tarjeta__grupo-dato'>{monitor.macAddress}</button>
                                                            </div>
                                                        </div>

                                                        <div className='tarjeta__grupo-versiones'>
                                                            <div>
                                                                <b className='tarjeta__grupo-dato tarjeta__grupo-datos-titulo'>Version</b>
                                                            </div>
                                                            <div className='tarjeta__grupo-version'>
                                                                <button className='tarjeta__grupo-dato'>{monitor.version}</button>
                                                                <div className='tarjeta__grupo-box'/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                                {post2}
                                </div>
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