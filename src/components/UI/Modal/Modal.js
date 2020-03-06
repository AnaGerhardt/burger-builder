import React, { useEffect } from 'react'
import './modal.css'
import { Backdrop } from '../../'

export const Modal = (props) => {

    useEffect(() => {
    },[props.show])

    return (
        <>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div 
                className='Modal'
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </>
    )
}