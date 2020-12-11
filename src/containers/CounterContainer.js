import React, {useState} from 'react';
import ItemCount from '../componentes/ItemCount/ItemCount';

export default function CounterContainer({min,max, counter,setCounter}) {

    // const [counter, setCounter]= useState(0);

    const onAdd = (sign)=> {
        if ( (sign === '+') && (counter < max) ) setCounter(counter+1)
        else if ( (sign === '-') && (counter > min) ) setCounter(counter-1)
    }

    return (
        <div>
         <ItemCount counter={counter}  onAdd={onAdd}/>
        </div>
    )
}
