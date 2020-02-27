import React from 'react'
import './BuildControls.css'
import { BuildControl } from '../../'


export const BuildControls = (props) => {
    
    const controls = [
        { label: 'Salad', type: 'salad'},
        { label: 'Bacon', type: 'bacon'},
        { label: 'Meat', type: 'meat'},
        { label: 'Cheese', type: 'cheese'}
    ]

    return (
    <>
        <div className='BuildControls'>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} label={ctrl.label} />
            ))}
        </div>
    </>
    )
}