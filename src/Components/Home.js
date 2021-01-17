import React from 'react';
import styles from '../Styles/Home.module.css';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <h2 className="title">Primeira Chance</h2>
        <h4 className={styles.subtitle}>
          Iniciativa que une empresas a grandes talentos.
        </h4>
        <div className={styles.cards}>
          <div className={styles.person}>Person</div>
          <div className={styles.company}>Company</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
