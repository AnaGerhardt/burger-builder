import React, { useState } from 'react'
import { Burger, BuildControls, Modal, OrderSummary } from '../../components'

export const BurgerBuilder = () => {

    const INGREDIENT_PRICES = {
        salad: 0.5,
        cheese: 0.4,
        meat: 1.3,
        bacon: 0.7
    }

    const [ingredientState, setIngredientState] = useState
    ({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    })

    const [totalPrice, setTotalPrice] = useState(4)
    const [purchasable, setPurchasable] = useState(false)
    const [purchasing, setPurchasing] = useState(false)

    const addIngredient = (type) => {
        let ingredientsCounter = ingredientState[type]
        setIngredientState({ ...ingredientState, [type]: ingredientsCounter + 1 })
        let priceCounter = totalPrice + INGREDIENT_PRICES[type]
        setTotalPrice(priceCounter)
        setPurchasable(true)
    }

    const removeIngredient = (type) => {
        let ingredientsCounter = ingredientState[type]
        ingredientsCounter > 0 ? (
        setIngredientState({ ...ingredientState, [type]: ingredientsCounter - 1 }))
        : null
        let priceCounter = totalPrice - INGREDIENT_PRICES[type]
        setTotalPrice(priceCounter)
        updatePurchasable(ingredientState)
    }

    const disabledButton = { ...ingredientState }
    for (let key in disabledButton) {
        disabledButton[key] = disabledButton[key] <= 0
    }

    const updatePurchasable = (ingredients) => {
        let sum = Object.keys(ingredients) //transform object to array
                .map(igKey => {
                    return ingredients[igKey] //take the numbers array
                })
                .reduce ((sum, el) => { //reduce array to one number, summing all elements, starting with 0
                    return sum + el //sum is the numbers array
                }, 0)
        setPurchasable(sum > 0)
    }

    const purchasingHandler = () => {
        setPurchasing(true)
    }

    const purchasingCancel = () => {
        setPurchasing(false)
    }

    return (
        <>
            <Modal show={purchasing} modalClosed={purchasingCancel}>
                <OrderSummary ingredients={ingredientState} />
            </Modal>
            <Burger ingredients={ingredientState} />
            <BuildControls 
                addIngredient={addIngredient} 
                removeIngredient={removeIngredient}
                disabled={disabledButton}
                price={totalPrice}
                purchasable={purchasable}
                purchasingHandler={purchasingHandler}
            />
        </>
    )
}