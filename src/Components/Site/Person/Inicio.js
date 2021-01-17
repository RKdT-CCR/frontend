import React from 'react';
import { nativeTouchData } from 'react-dom/test-utils';
import { useNavigate } from 'react-router-dom';

import { Context } from '../../../Services/UserServices';

const Inicio = () => {
  const navigate = useNavigate();
  const { auth } = React.useContext(Context);

  React.useEffect(() => {
    if (!auth) navigate('/');
  }, [auth]);

  return <div>Inicio Usuário</div>;
};

export default Inicio;
