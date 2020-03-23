import React from 'react'
import { Burger, Button } from '../../'
import './checkoutsummary.css'

export const CheckoutSummary = (props) => {

    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well for you!</h1>
            <div style={{margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinue}>CONTINUE</Button>
        </div>
    )
}