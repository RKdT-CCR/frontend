import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Context } from '../../../Services/UserServices';
import Header from './Header';

const Inicio = () => {
  const navigate = useNavigate();
  const { auth, user } = React.useContext(Context);

  React.useEffect(() => {
    if (!auth) navigate('/');
  }, [auth]);

  if (user) {
    return (
      <section>
        <Header />
        <div style={{ marginTop: '4rem' }}>Autenticado: {auth}</div>
      </section>
    );
  } else return <div></div>;
};

export default Inicio;
