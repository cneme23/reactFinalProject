import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/Body/ItemListContainer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer titulo="Habanos" precio= "$100" foto="/img/cohiba_esplendidos.jpg" />
      <ItemListContainer titulo="Cigarros" precio= "$500" foto="/img/vegafina_robusto.jpg"/>
      <ItemListContainer titulo="Cigarritos" precio= "$700" foto="/img/desert14.jpeg"/>
    </div>
  );
}

export default App;
