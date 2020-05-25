import React, { useState } from 'react'
import { Button, Spinner, Input } from '../../../components'
import './contactdata.css'
import axios from '../../../axios-orders'

export const ContactData = (props) => {

    const [orderForm, setOrderForm] = useState({
        name: {
            elementType: "input",
            elementConfig: {
                type: 'text',
                placeholder: 'Your name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false
        },
        street: {
            elementType: "input",
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false
        },
        zipCode: {
            elementType: "input",
            elementConfig: {
                type: 'text',
                placeholder: 'Postal Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5
            },
            valid: false
        },
        country: {
            elementType: "input",
            elementConfig: {
                type: 'text',
                placeholder: 'Country'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false
        },
        email: {
            elementType: "input",
            elementConfig: {
                type: 'email',
                placeholder: 'E-mail'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false
        },
        deliveryMethod: {
            elementType: "select",
            elementConfig: {
                options: [
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ]
            },
            value: ''
        }
    })
    const [loading, setLoading] = useState(false)

    const orderHandler = (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = {}
        for (let formElementIdentifier in orderForm) {
            formData[formElementIdentifier] = orderForm[formElementIdentifier].value
        }
        const order = {
            ingredients: props.ingredients,
            price: props.price, //real app should calculate from server
            orderData: formData
        }
        axios.post('/orders.json', order)
            .then(response => { setLoading(false); props.history.push("/") })
            .catch(error => setLoading(false))
    }

    const checkValidity = (value, rules) => {
        let isValid = false

        if (rules.required) {
            isValid = value.trim() !== ''
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength
        }
        
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength
        }

        return isValid
    }

    const formElementsArray = []

    for (let key in orderForm) {
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        })
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {...orderForm}
        const updatedFormElement = {...updatedForm[inputIdentifier]}
        updatedFormElement.value = event.target.value
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedForm[inputIdentifier] = updatedFormElement
        setOrderForm(updatedForm)
    }

    return (
        loading ? <Spinner /> : (
        <div className='ContactData'>
            <h4>Enter your Contact Data</h4>
            <form onSubmit={orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig}  
                        value={formElement.config.value} 
                        changed={() => inputChangedHandler(event, formElement.id)}
                    />     
                ))}
                <Button btnType="Success">ORDER</Button>
            </form>
        </div>
        )
    )
}