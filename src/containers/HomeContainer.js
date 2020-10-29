import React from 'react';
import Home from '../componentes/Home/Home';

export default function HomeContainer() {
    const greeting = "Bienvenidos a mi Ecommerce" ;

    return (
        <div className="container-fluid" style={{backgroundColor:'#9e9e9e', minHeight:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Home greeting={greeting}/>
        </div>
    )
}
