import React from 'react'
import { NavigationItem } from '../../'
import './navigationitems.css'

export const NavigationItems = (props) => {

    return (
        <ul className='NavigationItems'>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    )
}