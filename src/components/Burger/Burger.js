import React from 'react'
import './burger.css'
import { BurgerIngredient } from '../'

export const Burger = (props) => {

    let ingredientsArray = Object.keys(props.ingredients) //ingredients object to an array
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        })
        .reduce((arr, el) => { //remove empty elements of the array or let it be 1 empty element
            return arr.concat(el)
        }, []) 

    if (ingredientsArray.length === 0) {
        ingredientsArray = <p>Please start adding ingredients!</p>
    }

    return (
        <div className='Burger'>
            <BurgerIngredient type="bread-top" />
            {ingredientsArray}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}