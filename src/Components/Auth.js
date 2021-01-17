import React from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from '../Components/Helper/Loading';

import { Context } from '../Services/UserServices';

const Auth = () => {
  const navigate = useNavigate();
  const context = React.useContext(Context);
  async function login() {
    await context.setData(null);
    const response = await context.GetUser();
    if (response.success) {
      await context.setData(response.success[0]);
      context.isAuth(true);
      navigate('/inicio');
    } else {
      context.setData(null);
      context.isAuth(false);
      window.localStorage.removeItem('token');
      navigate('/');
    }
  }

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (!token) {
      navigate('/');
    } else {
      login();
    }
  }, []);

  return <Loading />;
};

export default Auth;
