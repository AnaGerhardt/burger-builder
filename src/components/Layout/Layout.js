import React from 'react'

export const Layout = (props) => (
    <>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main>{props.children}</main>
    </>
)