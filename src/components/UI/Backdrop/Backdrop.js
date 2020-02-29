import React from 'react'
import './backdrop.css'

export const Backdrop = (props) => {

    return (
        props.show ? <div className='Backdrop' onClick={props.clicked} /> : null
    )
}