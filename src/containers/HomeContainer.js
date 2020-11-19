import React from 'react';
import Home from '../componentes/Home/Home';

export default function HomeContainer() {
    const greeting = "Bienvenidos a mi BookStore" ;

    return (
        <div className="container-fluid" style={{minHeight:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Home greeting={greeting}/>
        </div>
    )
}
