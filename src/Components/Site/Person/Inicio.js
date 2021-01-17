import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../../../Styles/Person/Inicio.module.css';

import { Context } from '../../../Services/UserServices';
import Header from './Header';
import Trilha from './Trilha/Trilha';

const Inicio = () => {
  const navigate = useNavigate();
  const { user, trilhas, coursesCompletes, coursesStatus } = React.useContext(
    Context,
  );

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
              trilhas.map((trilha) => {
                const status = coursesStatus.filter(
                  (i) => i.trail_id == trilha.trail_id,
                );
                const completos = status.map((stt) => {
                  const t = coursesCompletes.filter(
                    (c) => c.course_id == stt.course_id,
                  );
                  return t;
                });

                return (
                  <div key={trilha.trail_id}>
                    <Trilha completos={completos.length} data={trilha} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  } else return <div></div>;
};

export default Inicio;
