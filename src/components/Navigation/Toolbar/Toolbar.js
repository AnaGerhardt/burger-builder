import React from 'react'
import './toolbar.css'
import { Logo, NavigationItems } from '../../'

export const Toolbar = () => {

    return (
        <>
            <header className='Toolbar'>
                <div>MENU</div>
                <Logo />
                <nav>
                    <NavigationItems />
                </nav>
            </header>
        </>
    )
}