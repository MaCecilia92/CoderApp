import React from 'react';

export default function Home({greeting}) {

    return (
        <div className="container-fluid font-weight-bold text-dark">
            <div className="m-5">
            <h1>{greeting}</h1>
            </div>
        </div>
    )
}
