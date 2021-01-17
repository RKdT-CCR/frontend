import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../Styles/Header.module.css';

import logo from '../../../Assets/logo192.png';
import { Context } from '../../../Services/UserServices';

const Header = () => {
  const { user } = React.useContext(Context);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/inicio" aria-label="Primeira Chance">
          <img src={logo} />
        </Link>
        <Link className={styles.login} to="/conta">
          {user.name}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
