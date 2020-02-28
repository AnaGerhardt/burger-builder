import React from 'react'

export const Layout = (props) => {

    return (
    <>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main style={{'marginTop':'16px'}}>{props.children}</main>
    </>
    )
}