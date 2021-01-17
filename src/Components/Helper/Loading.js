import React from 'react';
import ReactLoading from 'react-loading';

import styles from '../../Styles/Helper/Loading.module.css';

const Loading = () => {
  return (
    <section className={styles.loading}>
      <ReactLoading type="bubbles" color="#f8a825" />
    </section>
  );
};

export default Loading;
