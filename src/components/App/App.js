import React from 'react'
import { Layout, BurgerBuilder } from '../../containers'

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