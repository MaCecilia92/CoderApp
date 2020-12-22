import React from 'react';
import { useCartContext } from "../context/CartContext";
import { Link} from 'react-router-dom';

export default function CartContainer() {

    const { cartItems, borrar } = useCartContext();
    return (
        <div>
    
    {cartItems.length === 0 ? (
        <div style={{margin:'auto'}} >
        <span>Necesitas agregar items al carrito <Link to="/Catalogo"><a className="text-danger stretched-link">ver catalogo</a></Link> </span>
        </div>
      ) : (
        cartItems.map( libro => <div key={libro.id} style={{marginTop:'30px'}}>
            <div className="row m-8 d-flex justify-content-center">
                <div className="col-md-1">
                <img src={libro.image} className="img-fluid" alt={libro.title} style={{backgroundColor:'grey', height:'150px', width:'auto', backgroundImage:`url(${libro.image})`, backgroundPosition:'center'}}/>
                <br></br>
                </div>

                <div className="col-md-3">
                    <h3 className="text-left">{libro.title}</h3>
                    <div className=" d-flex justify-content-between">
                    <p className="card-descripcion text-left">{libro.author}</p> 
                    <p className="card-descripcion text-left text-primary">Agregaste <span className="font-weight-bold">{libro.booksAmount}</span> unidades al carrito</p>
                    </div>
                    <hr style={{marginTop:0, marginBottom:'10px'}}/>
                    <div className=" d-flex justify-content-end">
                    <button className="btn btn-danger" onClick={()=>{borrar(libro.id)}} >Borrar</button>
                    </div>
                </div>
            </div>
        </div>)
      )}
        </div>
    )
}
