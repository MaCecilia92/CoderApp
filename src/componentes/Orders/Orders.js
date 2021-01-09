import React from 'react';
import OrderCards from '../Orders/OrderCards';
import Loader from '../Loader/Loader';
import OrderForm from '../Orders/OrderForm';


export default function Orders({addOrder, orderId, cartItems}) {
    return (
        <div className="mt-5">
            {cartItems.length === 0 ? (<Loader />) 
                : (<div className="d-flex justify-content-center col-md-8 offset-md-2 col-lg-8 offset-lg-2">
                    <div>
                        <OrderForm orderId={orderId} addOrder={addOrder}/>
                    </div>
                    <div>
                        <OrderCards cartItems={cartItems} />
                    </div>
                </div>)}
        </div>
    )
}
