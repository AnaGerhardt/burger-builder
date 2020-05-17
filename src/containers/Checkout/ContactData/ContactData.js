import React, { useState } from 'react'
import { Button, Spinner } from '../../../components'
import './contactdata.css'
import axios from '../../../axios-orders'

export const ContactData = (props) => {

    // const [userData, setUserData] = useState({
    //     name: '',
    //     email: '',
    //     address: {
    //         street: '',
    //         postalCode: ''
    //     }
    // })
    const [loading, setLoading] = useState(false)

    const orderHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        const order = {
            ingredients: props.ingredients,
            price: props.price, //real app should calculate from server
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
            .then(response => { setLoading(false); props.history.push("/") })
            .catch(error => setLoading(false))
    }

    return (
        loading ? <Spinner /> : (
        <div className='ContactData'>
            <h4>Enter your Contact Data</h4>
            <form>
                <input className='Input' type="text" name="name" placeholder="Your Name" />
                <input className='Input' type="email" name="email" placeholder="Your E-mail" />
                <input className='Input' type="text" name="street" placeholder="Street" />
                <input className='Input' type="text" name="postalcode" placeholder="Postal Code" />
                <Button btnType="Success" clicked={orderHandler}>ORDER</Button>
            </form>
        </div>
        )
    )
}