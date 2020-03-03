import React from 'react'
import './toolbar.css'
import { Logo, NavigationItems } from '../../'

export const Toolbar = () => {

    return (
        <>
            <header className='Toolbar'>
                <div>MENU</div>
                <Logo height='80%' />
                <nav className='DesktopOnly'>
                    <NavigationItems />
                </nav>
            </header>
        </>
    )
}