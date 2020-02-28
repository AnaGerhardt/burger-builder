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
            <p>Current price: <strong>{props.price.toFixed(2)} dollars </strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added={() => props.addIngredient(ctrl.type)}
                    removed={() => props.removeIngredient(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button className='OrderButton' disabled={!props.purchasable}>Order now!</button>
        </div>
    </>
    )
}