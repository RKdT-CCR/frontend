import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../../../Styles/Person/Inicio.module.css';

import { Context } from '../../../Services/UserServices';
import Header from './Header';
import Trilha from './Trilha/Trilha';

const Inicio = () => {
  const navigate = useNavigate();
  const { user, trilhas } = React.useContext(Context);

  React.useEffect(() => {
    const auth = window.localStorage.getItem('auth');
    if (!auth || !user) navigate('/');
  }, []);

  if (user) {
    return (
      <section>
        <Header />
        <div style={{ marginTop: '4rem', padding: '3rem' }}>
          <h1 className="title">Trilhas</h1>
          <div className={styles.content}>
            {trilhas &&
              trilhas.map((trilha) => <Trilha key={trilha.id} data={trilha} />)}
          </div>
        </div>
      </section>
    );
  } else return <div></div>;
};

export default Inicio;
