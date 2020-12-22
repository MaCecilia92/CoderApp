import React, { useState, useContext, useEffect } from "react";

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ value = [] , children }) => {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState(value);
  const [libros, setLibros]= useState([]);
  const [isLoading, setLoading] = useState(true);

    useEffect (()=>{
        const getBooks = fetch('https://private-5709b2-booklists.apiary-mock.com/booklists');
        getBooks
        .then(res => {
            const results = res.json();
            return results;
        })
        .then((results) => setLibros(results))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
        }, []);


  function add(bookFind, counter) {
    if (cartItems.some(elem => elem.id === bookFind.id)) {
        const repeatedIndex = cartItems.findIndex(el => el.id === bookFind.id);
        const cartsItemsCopy = [...cartItems]; //spread operator
        cartsItemsCopy[repeatedIndex] = {
          ...cartsItemsCopy[repeatedIndex],
          booksAmount: cartsItemsCopy[repeatedIndex].booksAmount + counter //Le sumo la cantidad de unidades a pedir
        };
        setCartItems(cartsItemsCopy);
      } else {
        setCartItems([
          ...cartItems,
          {
            ...bookFind,
            booksAmount:counter
          }
        ]); 
        
        setCount(count + 1);
      }
     
  }

  function borrar (id) {
      const cartsItemsCopy = cartItems.filter(elem => elem.id !== id);
      setCartItems(cartsItemsCopy);
      setCount(count - 1);

  }

console.log("cartItems", cartItems);

  function clear() {
    setCount(0);
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ count, add, clear, libros, cartItems, isLoading, setLoading, borrar}}>
      {children}
    </CartContext.Provider>
  );
};