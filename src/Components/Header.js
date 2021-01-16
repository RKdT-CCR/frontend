import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className="container">
        <Link to="/">Inicio</Link>
        <Link to="/login">Entrar</Link>
      </nav>
    </div>
  );
};

export default Header;
