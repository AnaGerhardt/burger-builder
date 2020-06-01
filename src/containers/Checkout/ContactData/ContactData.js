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
            valid: false,
            touched: false
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
            valid: false,
            touched: false
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
            valid: false,
            touched: false
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
            valid: false,
            touched: false
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
            valid: false,
            touched: false
        },
        deliveryMethod: {
            elementType: "select",
            elementConfig: {
                options: [
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ]
            },
            validation: {},
            value: '',
            valid: true
        }
    })
    const [loading, setLoading] = useState(false)
    const [formIsValid, setFormIsValid] = useState(false)

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
            isValid = value.length >= rules.minLength && isValid
        }
        
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
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
        updatedFormElement.touched = true
        updatedForm[inputIdentifier] = updatedFormElement
        let formIsValid = true
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid
        }
        setFormIsValid(formIsValid)
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
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={() => inputChangedHandler(event, formElement.id)}
                    />     
                ))}
                <Button btnType="Success" disabled={!formIsValid}>ORDER</Button>
            </form>
        </div>
        )
    )
}