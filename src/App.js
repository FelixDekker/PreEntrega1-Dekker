import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './styles.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Hola! Bienvenido a mi tienda en línea" />
    </div>
  );
};

export default App;
