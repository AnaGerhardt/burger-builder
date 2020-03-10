import React from 'react'
import { Layout } from '../../containers'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'

export const App = () => {
    return (
        <>
            <div>
                <Layout>
                    <BurgerBuilder />
                </Layout>
            </div>
        </>
    )
}