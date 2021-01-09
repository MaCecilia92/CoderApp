import React from 'react';
import { useCartContext } from "../context/CartContext";
import CartDetail from '../componentes/CartComponents/CartDetail';
import CartPrice from '../componentes/CartComponents/CartPrice';

export default function CartContainer() {

    const { cartItems, borrar, buyPrice } = useCartContext();

    return (
        <div>
            <CartDetail cartItems={cartItems} borrar={borrar}/>
            <CartPrice buyPrice={buyPrice}/>
        </div>    
    )
    
} 
