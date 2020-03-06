import React from 'react'
import './drawertoggle.css'

export const DrawerToggle = (props) => {

    return (
        <div className='DrawerToggle' onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}