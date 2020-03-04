import React, { useState } from 'react'
import { Toolbar, SideDrawer } from '../'

export const Layout = (props) => {

    const [showSideDrawer, setShowSideDrawer] = useState(true)

    const sideDrawerClosed = () => {
        setShowSideDrawer(false)
    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer)
    }

    return (
    <>
        <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
        <SideDrawer open={showSideDrawer} closed={sideDrawerClosed} />
        <main style={{'marginTop':'72px'}}>{props.children}</main>
    </>
    )
}