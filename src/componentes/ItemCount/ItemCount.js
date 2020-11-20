import React from 'react';

export default function Counter({counter, onAdd}) {
    return (
        <div  className="d-flex justify-content-center">
                <div className="card-body d-flex justify-content-between text-dark" style={{width:"180px"}}>
                    <button className="btn btn-outline-danger font-weight-bold" onClick={ ()=> onAdd('-') }> - </button>
                        <div className="m-2 font-weight-bold "> {counter} </div>
                    <button className="btn btn-outline-success font-weight-bold" onClick={ ()=> onAdd('+') }> + </button>
                </div>
               
        </div>
    )
}
