import React from 'react'
import './BuildControl.css'

export const BuildControl = (props) => {

    return (
    <>
        <div className='BuildControl'>
            <div className='BuildControl Label'>{props.label}</div>
            <button className='BuildControl Less' onClick={props.removed} disabled={props.disabled}>Less</button>
            <button className='BuildControl More' onClick={props.added}>More</button>
        </div>
    </>
    )
}