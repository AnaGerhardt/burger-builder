import React from 'react'
import './button.css'

export const Button = (props) => {

    return (
        <>
            <button 
                onClick={props.clicked}
                className={`Button ${props.btnType}`}
            >
                {props.children}
            </button>
        </>
    )
}