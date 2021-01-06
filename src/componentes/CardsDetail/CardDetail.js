import React from 'react';
import Loader from '../Loader/Loader';
import CounterContainer from '../../containers/CounterContainer';


export default function CardDetail({books, add}) {
  

    return (
        <div className="container">
     
      {!books.categories ? (
        <div style={{margin:'auto'}} >
        <Loader/>
        </div>
      ) : 
         (<div key={books.id}>
            <div className="row m-5">
                <div className="col-md-4">
                <img src={books.imageUrl} className="img-fluid" alt={books.title} style={{backgroundColor:'grey', height:'auto', width:'500px', backgroundImage:`url(${books.imageUrl})`, backgroundPosition:'center'}}/>
                <br></br>
                </div>

                <div className="col-md-8">
                    <h3>{books.title}</h3>
                    { books.categories.map((c,i) =>{return <h5 key={i}>{c}</h5>})}
                    <hr/>
                    <p className="card-descripcion text-left">{books.description}</p>
                    <div className="d-flex justify-content-center">
                    <CounterContainer min='0' max={books.stock} add={add} books={books}/>
                    </div>
                </div>
            </div>
        </div>
      )}
      
    </div>
    )
}
