import React from 'react'
import './BuildControl.css'

export const BuildControl = (props) => (
    <>
    <div className='BuildControl'>
        <div className='BuildControl Label'>{props.label}</div>
        <button className='BuildControl Less'>Less</button>
        <button className='BuildControl More'>More</button>
    </div>
    </>
);