import React, {useState, useEffect} from 'react'; 
import CardProduct from '../componentes/CardProduct/CardProduct';


export default function CardProductContainer() {
    const [products, setProducts]= useState([])
 
    useEffect(()=>{
       getProducts
        .then((response) => {
         console.log(response);
         setProducts(response)
       });
    }, [])
 
    const getProducts = new Promise ((res,rej)=>{
       const Productos = [
       {
         "id":"1",
         "name" : "Remera Blanca",
         "descripcion" : "100% algodón"
       },
       {
         "id" : "2",
         "name" : "Remera Azul",
         "descripcion" : "50% algodón"
       },
       {
        "id" : "3",
        "name" : "Remera Negra",
        "descripcion" : "50% algodón + 50% poliester"
      },
      {
        "id" : "4",
        "name" : "Remera Roja",
        "descripcion" : "100% algodón"
      }
     ];
 
     setTimeout(()=>{
       res(Productos)
       console.log('se ejecutó');
       rej("error")
     }, 3000)
 
     })
 
       
   return (
     <div>
       <CardProduct products={products}/>
     </div>
     );
 }