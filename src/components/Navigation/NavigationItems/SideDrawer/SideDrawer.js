import React from 'react'
import './sidedrawer.css'
import { Logo, NavigationItems } from '../../../'

export const SideDrawer = (props) => {

    return (
        <div className='SideDrawer'>
            <Logo height='11%' /> <br />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}