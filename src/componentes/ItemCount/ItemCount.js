import React from 'react';

export default function Counter({counter, onAdd}) {
    return (
        <div>

            <div className="card mb-3 bg-light" style={{maxWidth: '18rem'}}>
                <img className="card-img-top" style={{backgroundColor:'grey', height:'200px'}}/>
                <div className="card-body d-flex justify-content-between text-dark ">
                    <button className="btn btn-outline-danger font-weight-bold" onClick={ ()=> onAdd('-') }> - </button>
                        <div className="m-2 font-weight-bold "> {counter} </div>
                    <button className="btn btn-outline-success font-weight-bold" onClick={ ()=> onAdd('+') }> + </button>
                </div>
                <div className="card-footer bg-transparent">
                    <button className="btn btn-success" >Agregar al carrito</button>
                </div>
            </div>
            
        </div>
    )
}
