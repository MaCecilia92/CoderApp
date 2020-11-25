import React, {useEffect, useState} from 'react';
import CardDetail from '../componentes/CardsDetail/CardDetail';
import { useParams } from 'react-router-dom';

export default function CardDetailContainer() {  


    const [isLoading, setLoading] = useState(true)

    const [libros, setLibros]= useState([])

    const { id } = useParams();

  

    useEffect(()=>{
        const getBooks = fetch('https://private-5709b2-booklists.apiary-mock.com/booklists');

        
            getBooks
            .then(res => {
                    const results = res.json();
                    return results;
                })
            .then(results => {
                    console.log(results);
                    setLibros([results= results.find(e => e.id === id)]);
                    setLoading(false);
      });

    },[]);

    useEffect(()=>{
        console.log("id", id)
    },[id])

    console.log(libros)

    return (
        <div>
            <CardDetail libros={libros} isLoading={isLoading}/>
        </div>
    )
}
























