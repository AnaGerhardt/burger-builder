import React, { useState } from 'react'
import { Burger, BuildControls } from '../../components'

export const BurgerBuilder = () => {

    const [ingredientState, setIngredientState] = useState
    ({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    })

    return (
        <>
            <Burger ingredients={ingredientState} />
            <BuildControls />
        </>
    )
}