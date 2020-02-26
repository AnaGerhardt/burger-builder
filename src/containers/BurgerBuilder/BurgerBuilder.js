import React, { useState } from 'react'
import { Burger } from '../../components'

export const BurgerBuilder = () => {

    const [ingredientState, setIngredientState] = useState
    ({
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2
    })

    return (
        <>
            <Burger ingredients={ingredientState} />
            <div>Build Controls</div>
        </>
    )
}