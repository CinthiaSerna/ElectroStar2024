import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ShoppingCartNavbar.css';
import cesta from '../img/cestados.png';
import userImage from '../img/usuario (1).png'

const ShoppingCartNavbar = ({ countProducts }) => {

  const [user, setUser] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);   

  const handleIconClick = () => {
    setShowInfo(!showInfo);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
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
          {showInfo && user && (
            <div className="user-info-box">
              <p className="user-email">{user.email}</p>
              <button className="logout-button" onClick={handleLogout}>
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
