import React from 'react'
import { Toolbar } from '../'

export const Layout = (props) => {

    return (
    <>
        <Toolbar />
        <main style={{'marginTop':'72px'}}>{props.children}</main>
    </>
    )
}