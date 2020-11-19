import React from 'react';
import CardProductsContainer from '../../containers/CardProductsContainer';



export default function Home({greeting}) {

    return (
        <div className="container-fluid font-weight-bold text-dark mt-4">
            <h1>{greeting}</h1>
            <CardProductsContainer/>
        </div>
    )
}
