import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icono" />
      <span className="cart-notificacion badge bg-danger">3</span>
    </div>
  );
};

export default CartWidget;

