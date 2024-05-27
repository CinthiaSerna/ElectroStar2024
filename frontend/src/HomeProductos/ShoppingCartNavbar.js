import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCartNavbar.css';
import cesta from '../img/cestados.png';
import userImage from '../img/usuario (1).png'

const ShoppingCartNavbar = ({ countProducts }) => {

  useEffect(() => {
    console.log(localStorage.getItem("user"));
  }, []);

  const [showInfo, setShowInfo] = useState(false);

  const handleIconClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <header className="shopping-cart-header">
      <div className="shopping-cart-container">
        <h1 className="shopping-cart-title">Shopping Cart</h1>
        <div className="user-icon-container">
          <div className="user-icon-circle" onClick={handleIconClick}>
          <img src={userImage} alt="User Icon" className="user-image" />
            <i className="fas fa-user"></i>
          </div>
          {showInfo && (
            <div className="user-info-box">
              <p className="user-name">Nombre Completo</p>
              <p className="user-email">Correo</p>
              <button className="logout-button" >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
        <div className="shopping-cart-icon-container">
          <Link to="/cart" className="shopping-cart-link">
            <img id="carrito" className="carrito" src={cesta} alt="Carrito" />
            {countProducts > 0 && (
              <div id="numero" className="cart-count">
                {countProducts}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ShoppingCartNavbar;
