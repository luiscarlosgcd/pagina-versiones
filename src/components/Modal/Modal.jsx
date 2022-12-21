import React, { useRef, useEffect, useCallback } from 'react'
import ReactDom from 'react-dom'
import './Modal.css'

export default function Modal({ open, setOpenKey, children}) {

    const modalRef = useRef()
    
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setOpenKey(false)
        }
    }

    const keyPress = useCallback( e => { //esc escape
        if(e.key === 'Escape' && open){
            setOpenKey(false)
        }
    }, [setOpenKey, open])

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    },[keyPress])

    if(!open) return null


    return ReactDom.createPortal(
    <>
        <div className='overlay' ref={modalRef} onClick={closeModal}>
            <div className='modal__background'>
                {children}
            </div>
        </div>
    </>,
    document.getElementById('portal')
    )
}

