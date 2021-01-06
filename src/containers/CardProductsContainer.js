import React, { useEffect, useState }  from 'react'; 
import CardProduct from '../componentes/CardProduct/CardProduct';
import { useCartContext } from "../context/CartContext";

import { getFirestore } from '../firebase/index'



export default function CardProductContainer() {

  const { libros, setLoading} = useCartContext();

  const [books, setBooks] = useState([])

  useEffect(()=>{
    setLoading(true);
    const db = getFirestore();
    const itemcollection = db.collection('products_books');
    itemcollection.get().then((querySnapshot)=>{
      if (querySnapshot.size === 0){
        console.log('No tiene resultados')
      }
      setBooks(querySnapshot.docs.map(doc =>  {
        const bookid = {
        ...doc.data(),
        id: doc.id
        }
        return bookid
      }
      
      ));
    }).catch((error)=>{
      console.log('error searchig books', error);
    }).finally(()=>{
      setLoading(false)
    });
  },[])

  console.log('books db', books)
           
   return (
     <div className="d-flex flex-wrap justify-content-center " >
       <CardProduct books={books} />
     </div>
     );
 }