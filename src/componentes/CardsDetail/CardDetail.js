import React from 'react';
import Loader from '../Loader/Loader';
import CounterContainer from '../../containers/CounterContainer';
import BuyButton from '../BuyButton/BuyButton'


export default function CardDetail({books}) {
    
  
    return (
        <div className="container">
     
      {books.length === 0 ? (
        <div style={{margin:'auto'}} >
        <Loader/>
        </div>
      ) : (
        books.map( book =>
        
            <div key={book.id}>
                <div className="row m-5">
                    <div className="col-md-4">

                    <img src={book.image} className="img-fluid" alt={book.title} style={{backgroundColor:'grey', height:'auto', width:'500px', backgroundImage:`url(${book.image})`, backgroundPosition:'center'}}/>
                    <br></br>
                    </div>

                    <div className="col-md-7">
                        <h3>{book.title}</h3>
                        <hr/>
                        <p className="card-descripcion text-left">{book.description}</p>
                        <div className="d-flex justify-content-center">
                        <CounterContainer min='0' max='10'/>
                        <BuyButton/>
                        </div>
                    </div>
                </div>
            </div>
            )
      )}
      
    </div>
    )
}
