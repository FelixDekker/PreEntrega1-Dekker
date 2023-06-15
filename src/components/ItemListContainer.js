import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-contenedor">
      <p className="texto-lista">{greeting}</p>
    </div>
  );
};

export default ItemListContainer;

