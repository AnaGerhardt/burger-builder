import React from 'react'
import './toolbar.css'
import { Logo, NavigationItems, DrawerToggle } from '../../'

export const Toolbar = (props) => {

    return (
        <>
            <header className='Toolbar'>
                <DrawerToggle clicked={props.drawerToggleClicked} />
                <Logo height='80%' />
                <nav className='DesktopOnly'>
                    <NavigationItems />
                </nav>
            </header>
        </>
    )
}