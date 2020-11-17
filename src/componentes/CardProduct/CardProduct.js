import React from "react";
import CounterContainer from '../../containers/CounterContainer';
import './CardStyle.css';

export default function CardProduct({products}) {
  return (
    <div className="d-flex justify-content-center ">
     
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map( p =>
            <div key={p.id} className="card m-3 bg-light" style={{width: '18rem'}}>
                <img className="card-img-top" style={{backgroundColor:'grey', height:'200px'}}/>
                <div className="card-text">
                    <h1 className="card-title">{p.name}</h1>
                </div>
                <div className="card-text">
                    <p className="card-descripcion">{p.descripcion}</p>
                </div>
                    <CounterContainer min='0' max='10'/>
                <div className="card-footer bg-transparent">
                    <button className="btn btn-success" >Agregar al carrito</button>
                </div>
            </div> )
      )}
      
    </div>
  );
}