import React, {useEffect, useState} from 'react';
import CardDetail from '../componentes/CardsDetail/CardDetail';
import { useParams } from 'react-router-dom';
import { useCartContext } from "../context/CartContext";

export default function CardDetailContainer() {


    const { id } = useParams();

    const [bookFind, setBookFind]= useState([])

    const { add, libros, isLoading, setLoading } = useCartContext();

    console.log("id--->", id)



    useEffect(()=>{
       
            setBookFind(libros.find(book => book.id==id));        
            setLoading(false); 

    },[]);



    return (
        <div>
            <CardDetail bookFind={bookFind} isLoading={isLoading} add={add}/>
        </div>
    )
}
























