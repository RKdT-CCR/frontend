import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import styles from '../../Styles/Login/Login.module.css';

//#region Components

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import CompanyLogin from './Company/CompanyLogin';

//#endregion

const Login = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      navigate('/auth');
    }
  }, []);

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
