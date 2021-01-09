import React, {useState} from 'react';
import OrderComponent from '../componentes/Orders/Orders';
import { getFirestore } from '../firebase/index';
import { useCartContext } from "../context/CartContext";
import  firebase from 'firebase/app';
import 'firebase/firestore';

export default function OrdersContainer() {

    const [orderId, setOrderId] = useState('');

    const { cartItems, buyPrice, setLoading } = useCartContext();


    console.log('orderCart', cartItems)

    const addOrder = e =>{
        e.persist()
        e.preventDefault()

        const data = {
            name: e.target[0].value,
            apellido:e.target[1].value,
            email:e.target[2].value,
            direccion:e.target[3].value,
            provincia:e.target[4].value,
            ciudad:e.target[5].value,
            telefono:e.target[6].value,
        }
    


        const orderItems = cartItems.map(item=>{
            return {
                amounts:item.booksAmount,
                id:item.id,
                price:parseFloat(item.price),
                title:item.title,
                totalPrice:parseFloat(item.totalPrice),
            }
        })

        const db = getFirestore();
        const orders = db.collection('orders');
        const newOrder = {
            buyer: data,
            items: orderItems, 
            total: parseFloat(buyPrice),
            date: firebase.firestore.Timestamp.fromDate(new Date()),

        };
        console.log('order', newOrder)
        orders.add(newOrder).then(({id})=>{
            setOrderId(id)
        }).catch(err => {
            throw err;
        }).finally(
            setLoading(false)
        )

    console.log('buyer', newOrder);
    }

    
    return (
        <div>
            <OrderComponent addOrder={addOrder} orderId={orderId} cartItems={cartItems}/>
        </div>
    )
}
