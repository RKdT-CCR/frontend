import React from 'react';
import { Link } from 'react-router-dom';
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
          <div className={styles.person}>
            <h3>Para Jovens</h3>
            <p className={styles.texto}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              reprehenderit iure optio asperiores ipsam molestiae.
            </p>
            <Link
              to="/login/criar"
              className={`${styles.button} ${styles.btn_person}`}
            >
              Inscreva-se
            </Link>
          </div>
          <div className={styles.company}>
            <h3>Para Empresas</h3>
            <p className={styles.texto}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              reprehenderit iure optio asperiores ipsam molestiae.
            </p>
            <Link
              to="/login/empresa/criar"
              className={`${styles.button} ${styles.btn_company}`}
            >
              Descubra Talentos
            </Link>
          </div>
        </div>
        <div className={styles.footer_area}>
          <Link className={styles.japossui} to="/login">
            Já possui cadastro?
          </Link>
          <p className={styles.credits}>Primeira Chance | 2021</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
