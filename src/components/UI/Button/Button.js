import React from 'react'

export const Button = (props) => {

    return (
        <>
            <button 
                onClick={props.clicked}
                className={'Button' + props.btnType}
            >
                {props.children}
            </button>
        </>
    )
}