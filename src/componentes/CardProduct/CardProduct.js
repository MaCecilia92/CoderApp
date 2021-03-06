import React from "react";
import Loader from '../../componentes/Loader/Loader';
import { Link } from 'react-router-dom';
import './CardStyle.css';

export default function CardProduct({books}) {
  return (
    <div className="container justify-content-center  d-flex flex-wrap ">
     
      {books.length === 0 ? (
        <div style={{margin:'auto'}} >
        <Loader/>
        </div>
      ) : (
        books.map( book =>
        
            <div key={book.id} className="card m-3 bg-light" style={{width: '18rem'}}>
              
                <img className="card-img-top" style={{backgroundColor:'grey', height:'300px', width:'auto', backgroundImage:`url(${book.imageUrl})`, backgroundPosition:'center'}}/>
          
  
                <div className="card-text">
                    <h1 className="card-title">{book.title}</h1>
                </div>
                <div className="card-text">
                    <p className="card-descripcion">{book.author}</p> 
                </div>
                <div className="card-footer bg-transparent">
                <Link to={`/item/${book.id}`}>
                    <button className="btn btn-danger" >Detalles</button>
                </Link> 
                </div>
                
            </div>
            )
      )}
      
    </div>
  );
}