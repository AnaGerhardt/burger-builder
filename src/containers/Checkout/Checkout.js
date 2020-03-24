import React, { useState, useEffect } from 'react'
import { CheckoutSummary } from '../../components'

export const Checkout = (props) => {

    const [ingredientState, setIngredientState] = useState({
        salad: 1,
        meat: 1,
        bacon: 1,
        cheese: 1
    })

    useEffect(() => {
        const query = new URLSearchParams(props.location.search)
        const ingredients = {}
        for (let param of query.entries()) {
            //['salad, '1']
            ingredients[param[0]] = +param[1]
        }
        setIngredientState(ingredients)
    },[props.location.search])

    const checkoutCancel = () => {
        props.history.goBack()
    }

    const checkoutContinue = () => {
        props.history.replace('/#checkout/contact-data')
    }

    return (
        <div>
            <CheckoutSummary 
                ingredients={ingredientState} 
                checkoutCancel={checkoutCancel}
                checkoutContinue={checkoutContinue}
            />
        </div>
    )
}