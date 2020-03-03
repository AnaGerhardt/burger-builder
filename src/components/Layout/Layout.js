import React from 'react'
import { Toolbar, SideDrawer } from '../'

export const Layout = (props) => {

    return (
    <>
        <Toolbar />
        <SideDrawer />
        <main style={{'marginTop':'72px'}}>{props.children}</main>
    </>
    )
}