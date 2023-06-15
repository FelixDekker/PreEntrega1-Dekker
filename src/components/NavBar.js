import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="brand">Mates Cancheros</li>
        <li className="item">Home</li>
        <li className="item">Sobre Nosotros</li>
        <li className="item">Contacto</li>
        <li className="item cart-item">
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

