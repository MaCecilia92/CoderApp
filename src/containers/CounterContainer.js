import React, {useState} from 'react';
import ItemCount from '../componentes/ItemCount/ItemCount';
import BuyButton from '../componentes/BuyButton/BuyButton';


export default function CounterContainer({min,max, add, bookFind}) {
    
    const [counter, setCounter]= useState(0);

    const onAdd = (sign)=> {
        if ( (sign === '+') && (counter < max) ) setCounter(counter+1)
        else if ( (sign === '-') && (counter > min) ) setCounter(counter-1)
    }



    return (
        <div className="d-flex justify-content-center">
         <ItemCount counter={counter}  onAdd={onAdd}/>
         <BuyButton counter={counter}  add={add} bookFind={bookFind}/>
        </div>
    )
}
