import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
          Sua conta
          <button onClick={handleClick}>Sair</button>
        </div>
      </section>
    );
  } else return <div></div>;
};

export default Account;
