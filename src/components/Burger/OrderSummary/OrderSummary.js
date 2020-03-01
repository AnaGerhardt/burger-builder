import React from 'react'
import { Button } from '../../'

export const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: 
                    {props.ingredients[igKey]}
                </li> 
            )
        })

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: <strong>{props.price.toFixed(2)} dollars</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchasingCancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchasingContinue}>CONTINUE</Button>
        </>
    )
}