import React from 'react';
import Loader from '../Loader/Loader';
import CounterContainer from '../../containers/CounterContainer';


export default function CardDetail({bookFind, isLoading, add}) {
    return (
        <div className="container">
     
      {isLoading ? (
        <div style={{margin:'auto'}} >
        <Loader/>
        </div>
      ) : (
         <div key={bookFind.id}>
            <div className="row m-5">
                <div className="col-md-4">
                <img src={bookFind.image} className="img-fluid" alt={bookFind.title} style={{backgroundColor:'grey', height:'auto', width:'500px', backgroundImage:`url(${bookFind.image})`, backgroundPosition:'center'}}/>
                <br></br>
                </div>

                <div className="col-md-8">
                    <h3>{bookFind.title}</h3>
                    <hr/>
                    <p className="card-descripcion text-left">{bookFind.description}</p>
                    <div className="d-flex justify-content-center">
                    <CounterContainer min='0' max={bookFind.stock} add={add} bookFind={bookFind}/>
                    </div>
                </div>
            </div>
        </div>
      )}
      
    </div>
    )
}
