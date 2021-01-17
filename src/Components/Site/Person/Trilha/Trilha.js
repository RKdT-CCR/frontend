import React from 'react';

import styles from '../../../../Styles/Person/Trilha.module.css';

const Trilha = ({ data, completos }) => {
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
            <span className={styles.progressText}>
              {completos}/{data.course_total} Desafios
            </span>
          </div>
          <h6>Capitulo {completos}</h6>
          <h2>{data.description}</h2>
          <button className={styles.btn}>Continuar</button>
        </div>
      </div>
    </div>
  );
};

export default Trilha;
