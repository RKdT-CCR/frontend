import React from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from '../../Styles/Login/Login.module.css';

//#region Components

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import CompanyLogin from './Company/CompanyLogin';

//#endregion

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="empresa/*" element={<CompanyLogin />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
