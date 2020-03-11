import React, { useState, useEffect } from 'react'
import { Burger, BuildControls, Modal, OrderSummary, Spinner } from '../../components'
import { ErrorHandler } from '../'
import axios from '../../axios-orders'

const BurgerBuilder = () => {

    const [ingredientState, setIngredientState] = useState('')

    useEffect(() => {
        axios.get('/ingredients.json')
            .then(response => setIngredientState(response.data))
    },[])

    const INGREDIENT_PRICES = {
        salad: 0.5,
        cheese: 0.4,
        meat: 1.3,
        bacon: 0.7
    }

    const [totalPrice, setTotalPrice] = useState(4)
    const [purchasable, setPurchasable] = useState(false)
    const [purchasing, setPurchasing] = useState(false)
    const [loading, setLoading] = useState(false)

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

    const purchasingContinue = () => {
        setLoading(true)
        const order = {
            ingredients: ingredientState,
            price: totalPrice, //real app should calculate from server
            customer: {
                name: 'Max',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '12345',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => setLoading(false), setPurchasing(false))
            .catch(error => setLoading(false), setPurchasing(false))

    }

    return (
        <>
            <Modal show={purchasing} modalClosed={purchasingCancel}>
                {loading ? (
                    <Spinner />
                ) : (
                    <OrderSummary 
                        ingredients={ingredientState} 
                        purchasingCancel={purchasingCancel}
                        purchasingContinue={purchasingContinue}
                        price={totalPrice}
                    />
                )}
            </Modal>
            {ingredientState ? (
                <>
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
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default ErrorHandler(BurgerBuilder, axios)