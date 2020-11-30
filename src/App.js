import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import HomeContainer from './containers/HomeContainer';
import CartContainer from './containers/CartContainer';
import CardDetailContainer from './containers/CardDetailContainer';
import CardProductsContainer from './containers/CardProductsContainer';

import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route exact path='/' render={()=><HomeContainer/>}/>
      <Route path='/Catalogo' render={()=><CardProductsContainer/>}/>
      <Route path='/Cart' render={()=><CartContainer/>}/>
      <Route path='/item/:id' render={()=><CardDetailContainer/>}/>
      </Switch>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
