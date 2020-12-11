import React from 'react'

export default function BuyButton({counter, buyButton}) {
    return (
        
            <div className="d-flex align-items-center">
                { counter > 0 ? <button className="btn btn-danger" onClick={buyButton}> Quiero {counter}</button>:<button className="btn btn-outline-danger disabled">Comprar</button> 
             }
        </div>

        
    )
}
