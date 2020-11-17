import React from 'react';

export default function Counter({counter, onAdd}) {
    return (
        <div>
                <div className="card-body d-flex justify-content-between text-dark ">
                    <button className="btn btn-outline-danger font-weight-bold" onClick={ ()=> onAdd('-') }> - </button>
                        <div className="m-2 font-weight-bold "> {counter} </div>
                    <button className="btn btn-outline-success font-weight-bold" onClick={ ()=> onAdd('+') }> + </button>
                </div>
               
        </div>
    )
}
