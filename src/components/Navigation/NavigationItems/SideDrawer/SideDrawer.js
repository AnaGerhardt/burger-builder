import React from 'react'
import './sidedrawer.css'
import { Logo, NavigationItems, Backdrop } from '../../../'

export const SideDrawer = (props) => {

    let attachedClasses = 'SideDrawer Close'
    props.open ? attachedClasses = 'SideDrawer Open' : attachedClasses = 'SideDrawer Close'

    return (
        <>
        <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses}>
            <Logo height='11%' /> <br />
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </>
    )
}