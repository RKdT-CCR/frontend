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
    if (response) {
      await context.setData(response.person);
      await context.DefTrilhas(response.trails);
      window.localStorage.setItem('auth', 'true');
      navigate('/inicio');
    } else {
      context.setData(null);
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('auth');
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
