import React from 'react'
import { Route } from 'react-router-dom'
import { Layout, Checkout } from '../../containers'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'

export const App = () => {
    return (
        <>
            <div>
                <Layout>
                    <BurgerBuilder />
                    <Checkout />
                </Layout>
            </div>
        </>
    )
}