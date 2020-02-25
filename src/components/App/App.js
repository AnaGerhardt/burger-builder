import React from 'react'
import { Layout } from '../'
import { BurgerBuilder } from '../../containers'

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