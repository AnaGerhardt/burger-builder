import React, { useState, useEffect } from 'react';
import { Order } from '../../components';
import axios from '../../axios-orders';
import { ErrorHandler } from '../../containers';

const Orders = () => {

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('/orders.json')
        .then(res => {
            setLoading(false)
            const fetchedOrders = []
            for (let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                })
            }
            setOrders(fetchedOrders)
        })
        .catch(err => {
            setLoading(false)
        })
    },[])

    return (
        <div>
            { orders.map(order => (
                <Order 
                    key={order.id}
                    ingredients={order.ingredients} 
                    price={+order.price}
                />     
            ))}
        </div>
    )
}

export default ErrorHandler(Orders, axios)