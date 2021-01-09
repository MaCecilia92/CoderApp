import React from 'react';

export default function OrderCards({ cartItems }) {
    console.log('cart', cartItems)
    return (
        <div className="d-flex flex-column ml-5">
            { cartItems.map(items => <div className="card m-2" key={items.id} style={{width: '400px'}}>
                    <div className="row no-gutters">
                        <div className="col-sm-4">
                            <img className="card-img" src={items.imageUrl}  style={{backgroundColor:'grey', height:'200px', width:'auto', backgroundImage:`url(${items.imageUrl})`, backgroundPosition:'center'}}/>
                        </div>
                        <div className="col-sm-7">
                            <div className="card-body">
                                
                            <h5 className="card-title">{items.title}</h5>
                            <p className="card-text">{items.author}</p>
                            <small className="card-text">Cantidad de libros: {items.booksAmount}</small>    
                            <p className="card-text">${items.totalPrice}</p>
                            </div>
                        </div>
                    </div>
            </div>)}
        </div>
    )
}
