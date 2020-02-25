import React from 'react'
import { BurgerDiv } from './burger-style'
import { BurgerIngredient } from '../'

export const Burger = (props) => {
    return (
        <BurgerDiv>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </BurgerDiv>
    )
}