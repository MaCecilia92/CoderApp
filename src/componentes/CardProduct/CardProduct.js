import React from "react";
import CounterContainer from '../../containers/CounterContainer';
import Loader from '../../componentes/Loader/Loader';
import './CardStyle.css';

export default function CardProduct({books}) {
  return (
    <div className="d-flex flex-wrap">
     
      {books.length === 0 ? (
        <div style={{margin:'auto'}} >
        <Loader/>
        </div>
      ) : (
        books.map( book =>
        
            <div key={book.id} className="card m-3 bg-light" style={{width: '18rem'}}>
                <img className="card-img-top" style={{backgroundColor:'grey', height:'300px', width:'auto', backgroundImage:`url(${book.image})`, backgroundPosition:'center'}}/>
                <div className="card-text">
                    <h1 className="card-title">{book.title}</h1>
                </div>
                {/* <div className="card-text">
                    <p className="card-descripcion">{book.description}</p> 
                </div> */}
                <div className="card-text">
                    <p className="card-descripcion">{book.author}</p> 
                </div>
                    <CounterContainer min='0' max='10'/>
                <div className="card-footer bg-transparent">
                    <button className="btn btn-danger" >Comprar</button>
                </div>
            </div>
            )
      )}
      
    </div>
  );
}