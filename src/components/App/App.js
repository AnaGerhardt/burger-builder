import React from 'react'
import { Route } from 'react-router-dom'
import { Layout, Checkout } from '../../containers'
import Orders from '../../containers/Orders/Orders'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'

export const App = () => {
    return (
        <>
            <div>
                <Layout>
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/" exact component={BurgerBuilder} />
                </Layout>
            </div>
        </>
    )
}