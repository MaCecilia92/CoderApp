import React, {useEffect, useState} from 'react';
import CardDetail from '../componentes/CardsDetail/CardDetail';
import { useParams } from 'react-router-dom';

export default function CardDetailContainer() {  


    const { id } = useParams();

    const [isLoading, setLoading] = useState(true)

    const [libros, setLibros]= useState([])



    useEffect(()=>{
        
        const getBooks = fetch('https://private-5709b2-booklists.apiary-mock.com/booklists');
            getBooks
            .then(res => {
                    const results = res.json();
                    return results;
                })
            .then(results => {
                    console.log(results);
                    console.log("id--->", id)
                    //setLibros([results[Math.floor(Math.random() * results.length + 1)]]); Me trae un elemento aleatorio del arreglo 
                    setLibros([results.find(e => e.id == id)]);
                    setLoading(false);
      });
      
    },[id]);

    console.log(libros)

    return (
        <div>
            <CardDetail libros={libros} isLoading={isLoading}/>
        </div>
    )
}
























