import React from 'react'
import { Content } from './layout-style'

export const Layout = (props) => {

    return (
    <>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <Content>{props.children}</Content>
    </>
    )
}