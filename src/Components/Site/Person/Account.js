import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Context } from '../../../Services/UserServices';
import Header from './Header';
const Account = () => {
  const navigate = useNavigate();
  const { auth, user } = React.useContext(Context);

  React.useEffect(() => {
    if (!auth) navigate('/');
  }, [auth]);

  if (user) {
    return (
      <section>
        <Header />
        <div style={{ marginTop: '4rem', padding: '3rem' }}>Sua conta</div>
      </section>
    );
  } else return <div></div>;
};

export default Account;
