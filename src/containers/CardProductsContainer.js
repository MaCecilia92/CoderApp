import React, {useState, useEffect} from 'react'; 
import CardProduct from '../componentes/CardProduct/CardProduct';



export default function CardProductContainer() {
    

    const [books, setBooks]= useState([]);
    useEffect (()=>{
        fetch('https://private-5709b2-booklists.apiary-mock.com/booklists')
        .then((response) => response.json())
        .then((json) => setBooks(json))
        .catch((error) => console.error(error))
    }, []);
 
    // useEffect(()=>{
    //    getProducts
    //     .then((response) => {
    //      console.log(response);
    //      setProducts(response)
    //    });
    // }, [])
 
    // const getProducts = new Promise ((res,rej)=>{
    //    const Productos = [
    //    {
    //      "id":"1",
    //      "name" : "Remera Blanca",
    //      "descripcion" : "100% algodón"
    //    },
    //    {
    //      "id" : "2",
    //      "name" : "Remera Azul",
    //      "descripcion" : "50% algodón"
    //    },
    //    {
    //     "id" : "3",
    //     "name" : "Remera Negra",
    //     "descripcion" : "50% algodón + 50% poliester"
    //   },
    //   {
    //     "id" : "4",
    //     "name" : "Remera Roja",
    //     "descripcion" : "100% algodón"
    //   }
    //  ];
 
    //  setTimeout(()=>{
    //    res(Productos)
    //    console.log('se ejecutó');
    //    rej("error")
    //  }, 3000)
 
    //  })
 
       
   return (
     <div>
       <CardProduct books={books} />
     </div>
     );
 }