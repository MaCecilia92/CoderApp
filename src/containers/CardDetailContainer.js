import React, {useEffect, useState} from 'react';
import CardDetail from '../componentes/CardsDetail/CardDetail';

export default function CardDetailContainer() {

    const [books, setBooks]= useState([])

    const getBooks = new Promise ((res,rej)=>{
        const books = fetch('https://private-5709b2-booklists.apiary-mock.com/booklists');

        setTimeout(()=>{
            res(books)
            console.log('Recibiendo respuesta')
            rej("error")
        }, 4000)
    })

    useEffect(() => {
        getBooks
        .then((response) => response.json())
        .then((json) => setBooks(json))
        .catch((error) => console.error(error))
        console.log(books);
    }, [])

    return (
        <div>
            <CardDetail books={books}/>
        </div>
    )
}
