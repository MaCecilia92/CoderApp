import React, {useEffect, useState} from 'react';
import CardDetail from '../componentes/CardsDetail/CardDetail';

export default function CardDetailContainer() {

    const [libros, setLibros]= useState([])

    useEffect(()=>{
        const getBooks = fetch('https://private-5709b2-booklists.apiary-mock.com/booklists');

        setTimeout(()=>{
            getBooks
            .then(res => {
                    const results = res.json();
                    return results;
                })
            .then(results => {
                    console.log(results);
                    setLibros([results[Math.floor((Math.random() * results.length) +1)]]);
      });
        }, 4000)

    },[]);

    return (
        <div>
            <CardDetail libros={libros}/>
        </div>
    )
}
























