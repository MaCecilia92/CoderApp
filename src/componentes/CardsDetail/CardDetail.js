import React from 'react';
import Loader from '../Loader/Loader';
import CounterContainer from '../../containers/CounterContainer';
import BuyButton from '../BuyButton/BuyButton'


export default function CardDetail({libros, isLoading, counter, setCounter, buyButton}) {
  
    return (
        <div className="container">
     
      {isLoading ? (
        <div style={{margin:'auto'}} >
        <Loader/>
        </div>
      ) : (
        libros.map( libro => <div key={libro.id}>
            <div className="row m-5">
                <div className="col-md-4">
                <img src={libro.image} className="img-fluid" alt={libro.title} style={{backgroundColor:'grey', height:'auto', width:'500px', backgroundImage:`url(${libro.image})`, backgroundPosition:'center'}}/>
                <br></br>
                </div>

                <div className="col-md-8">
                    <h3>{libro.title}</h3>
                    <hr/>
                    <p className="card-descripcion text-left">{libro.description}</p>
                    <div className="d-flex justify-content-center">
                    <CounterContainer min='0' max='10' counter={counter} setCounter={setCounter}/>
                    <BuyButton counter={counter} buyButton={buyButton}/>
                    </div>
                </div>
            </div>
        </div>)
      )}
      
    </div>
    )
}
