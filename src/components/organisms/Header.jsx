import React from "react";
import logoImg from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img className="icono" src={logoImg} alt="Velvetique Logo" />
          <span className="header-titulo">VELVETIQUE</span>
        </Link>

        <nav>
          <ul className="nav-lista">
            <li>
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/shop" className="nav-link">
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-link">
                SIGN IN
              </Link>
            </li>
          </ul>
        </nav>
        <div className="icono">
          <Link to="/login" className="icono">
            <i className="bi bi-person"></i>
          </Link>
          <Link to="/shop" className="icono">
            <i className="bi bi-bag"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};
