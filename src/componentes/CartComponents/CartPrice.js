import React from 'react';
import { Link } from 'react-router-dom';


export default function CartPrice({buyPrice}) {

    return (
        <div>
            {buyPrice > 0 &&
                <div>
                    <h5>Precio total de la compra</h5><span>{buyPrice}</span>
                        <Link to="/Facturacion">
                            <button className="btn btn-primary">Comprar</button>
                        </Link> 
                </div>
            }
        </div>
    )
}
