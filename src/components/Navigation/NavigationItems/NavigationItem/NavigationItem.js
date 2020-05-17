import React from 'react'
import { NavLink } from 'react-router-dom'
import './navigationitem.css'

export const NavigationItem = (props) => {

    return (
        <li className='NavigationItem'>
            <NavLink exact to={props.link}>
                {props.children}
            </NavLink>
        </li>
    )
}