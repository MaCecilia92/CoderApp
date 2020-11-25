import React from 'react';
import CardProductsContainer from '../../containers/CardProductsContainer';
import CardDetailContainer from '../../containers/CardDetailContainer'



export default function Home({greeting}) {

    return (
        <div className="container-fluid font-weight-bold text-dark">
            <div className="m-5">
            <h1>{greeting}</h1>
            </div>
            <CardProductsContainer/>
        </div>
    )
}
