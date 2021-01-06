import React, { useState, useContext, useEffect } from "react";

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ value = [] , children }) => {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState(value);
  const [libros, setLibros]= useState([]);
  const [isLoading, setLoading] = useState(true);
  const [buyPrice, setBuyPrice] = useState(0)

  function add(books, counter) {
    if (cartItems.some(elem => elem.id === books.id)) {
        const repeatedIndex = cartItems.findIndex(el => el.id === books.id);
        const cartsItemsCopy = [...cartItems]; //spread operator
        cartsItemsCopy[repeatedIndex] = {
          ...cartsItemsCopy[repeatedIndex],
          booksAmount: cartsItemsCopy[repeatedIndex].booksAmount + counter,//Le sumo la cantidad de unidades a pedir
          totalPrice: cartsItemsCopy[repeatedIndex].totalPrice + cartsItemsCopy[repeatedIndex].price*counter //sumo los precios de las unidades a pedir, cada vez que se agregan en el carrito
        };

        setCartItems(cartsItemsCopy);

      } else {
        setCartItems([
          ...cartItems,
          {
            ...books,
            booksAmount:counter,
            totalPrice:(books.price*counter),
          }
        ]); 
        setCount(count + 1);
      }
      setBuyPrice(buyPrice + (books.price*counter))
  }

  function borrar (id) {
      const cartsItemsCopy = cartItems.filter(elem => elem.id !== id);
      setCartItems(cartsItemsCopy);
      setCount(count - 1);
      setBuyPrice( buyPrice- (cartItems.filter(elem => elem.id == id)[0].totalPrice))

  }

console.log("cartItems", cartItems);

  function clear() {
    setCount(0);
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ count, add, clear, libros, cartItems, isLoading, setLoading, borrar, buyPrice}}>
      {children}
    </CartContext.Provider>
  );
};