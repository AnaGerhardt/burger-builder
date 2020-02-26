import React from 'react'
import { BurgerDiv } from './burger-style'
import { BurgerIngredient } from '../'

export const Burger = (props) => {

    const ingredientsArray = Object.keys(props.ingredients) //array of object keys (meat, salad, etc)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        })

    return (
        <BurgerDiv>
            <BurgerIngredient type="bread-top" />
            {ingredientsArray}
            <BurgerIngredient type="bread-bottom" />
        </BurgerDiv>
    )
}