import React from 'react';
import CounterContainer from '../../containers/CounterContainer';



export default function Home({greeting}) {

    return (
        <div className="container-fluid font-weight-bold text-dark">
            <h1>{greeting}</h1>
           
            <CounterContainer min='0' max='10'/>
        </div>
    )
}
