import React from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from '../../../Styles/Login/Login.module.css';

//#region Components

import CompanyLoginCreate from './CompanyLoginCreate';

//#endregion

const CompanyLogin = () => {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="criar" element={<CompanyLoginCreate />} />
        </Routes>
      </div>
    </section>
  );
};

export default CompanyLogin;
