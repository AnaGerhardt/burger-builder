import React, { useState } from 'react'
import { CheckoutSummary } from '../../components'

export const Checkout = () => {

    const [ingredientState, setIngredientState] = useState({
        salad: 1,
        meat: 1,
        bacon: 1,
        cheese: 1
    })

    return (
        <div>
            <CheckoutSummary ingredients={ingredientState} />
        </div>
    )
}