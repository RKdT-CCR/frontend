import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Context } from '../../../Services/UserServices';
import Button from '../../Helper/Button';
import Header from './Header';
const Account = () => {
  const navigate = useNavigate();
  const { auth, user } = React.useContext(Context);

  React.useEffect(() => {
    const auth = window.localStorage.getItem('auth');
    if (!auth || !user) navigate('/');
  }, [auth]);

  function handleClick() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('auth');
    navigate('/');
  }

  if (user) {
    return (
      <section>
        <Header />
        <div style={{ marginTop: '4rem', padding: '3rem' }}>
          <h1 className="title">Sua conta</h1>
          <div style={{ margin: '4rem 0' }}>
            <h3 style={{ margin: '1rem 0', color: 'rgba(0, 0, 0, 0.5)' }}>
              Nome: {user.name}
            </h3>
            <h3 style={{ margin: '1rem 0', color: 'rgba(0, 0, 0, 0.5)' }}>
              E-mail: {user.email}
            </h3>
            <h3 style={{ margin: '1rem 0', color: 'rgba(0, 0, 0, 0.5)' }}>
              Número: {user.number}
            </h3>
          </div>
          <button onClick={handleClick}>Sair</button>
        </div>
      </section>
    );
  } else return <div></div>;
};

export default Account;
