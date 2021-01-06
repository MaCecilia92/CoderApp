import React, {useEffect, useState} from 'react';
import CardDetail from '../componentes/CardsDetail/CardDetail';
import { useParams } from 'react-router-dom';
import { useCartContext } from "../context/CartContext";


import 'firebase/firestore';
import { getFirestore } from '../firebase/index'


export default function CardDetailContainer() {


    const { id } = useParams();

    const { add, libros, isLoading, setLoading } = useCartContext();

    const [books, setBooks] = useState({})

    let bookObject

    useEffect(() => {
        const db = getFirestore();
        const booksCollection = db.collection('products_books')
        const bookFind = booksCollection.doc(id);
        const categories = db.collection('categories');
        


        bookFind.get().then(doc =>{
            if(!doc.exists){
                console.log('book not found')
                return 
            }
            console.log('item found');

            const categoryKeys = []


            doc.data().categoryId.map(ids => {
                categories.doc(ids).get().then(category => {
                    categoryKeys.push(category.data().key)
                })
            })


            bookObject = { 
                id: doc.id,
                categories: categoryKeys,
                ...doc.data()
            }
            

        }).catch(error=>{
            console.log('error searching book', error)
        }).finally(()=>{
            setTimeout(()=>{setBooks(bookObject);}, 1000)
            setLoading(false)
        })


    }, [])
    
    return (
        <div>
            <CardDetail books={books}  add={add}/>
        </div>
    )
}
























