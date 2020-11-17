import React from 'react';
import CounterContainer from '../../containers/CounterContainer';
import CardProductsContainer from '../../containers/CardProductsContainer';



export default function Home({greeting}) {

    return (
        <div className="container-fluid font-weight-bold text-dark">
            <h1>{greeting}</h1>
            <CardProductsContainer/>
        </div>
    )
}
