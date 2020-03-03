import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import './logo.css'

export const Logo = (props) => {

    return (
        <>
            <div className='Logo' style={{height: props.height}}>
                <img src={burgerLogo} alt="MyBurger" />
            </div>
        </>
    )
}