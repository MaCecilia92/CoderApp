import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import HomeContainer from './containers/HomeContainer'


function App() {

  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <HomeContainer/>
    </div>
  );
}

export default App;
