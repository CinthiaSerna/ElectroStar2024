import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCartNavbar.css';
import cesta from '../img/cestados.png';
import { UserContext } from "../Cuenta_usuario/Signup/UserContext";

const ShoppingCartNavbar = ({ countProducts }) => {

  const { user } = useContext(UserContext);

  return (
    <header className="shopping-cart-header">
      <div className="shopping-cart-container">
        <h1 className="shopping-cart-title">Shopping Cart</h1>
        {user && (
        <div>
          <p>Nombre: {user.nombre}</p>
          <p>Email: {user.email}</p>
        </div>
        )}
        <div className="shopping-cart-icon-container">
          <Link to="/cart" className="shopping-cart-link">
            <img id="carrito" className="carrito" src={cesta} alt="Carrito" />
            {countProducts > 0 && <div id="numero" className="cart-count">{countProducts}</div>}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ShoppingCartNavbar;
