import React from 'react';

import styles from '../../../../Styles/Person/Trilha.module.css';

const Trilha = ({ data }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.preview}>
          <h6>Treinamento</h6>
          <h2>{data.name}</h2>
          <a href="#">Ver tudo {'>'}</a>
        </div>
        <div className={styles.info}>
          <div className={styles.progressContainer}>
            <div className={styles.progress}></div>
            <span className={styles.progressText}>6/9 Desafios</span>
          </div>
          <h6>Capitulo 4</h6>
          <h2>Assertividade</h2>
          <button className={styles.btn}>Continuar</button>
        </div>
      </div>
    </div>
  );
};

export default Trilha;
