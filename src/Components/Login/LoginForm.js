import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../../Styles/Login/LoginForm.module.css';

import Input from '../Helper/Input';
import Button from '../Helper/Button';
import useForm from '../../Hooks/useForm';

import { UserLogin } from '../../Services/UserServices';

const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const email = useForm('email');
  const password = useForm();

  async function handleSubmit(e) {
    e.preventDefault();
    if (email.validate() && password.validate()) {
      setLoading(true);
      const login = await UserLogin(email.value, password.value);
      setLoading(false);
      if (login.success) {
        window.localStorage.setItem('token', login.success.token);
        navigate('/auth');
      }
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className="title">Entrar</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input label="E-mail" type="email" name="email" {...email} />
          <Input label="Senha" type="password" name="password" {...password} />
          {loading ? (
            <Button disabled>Entrando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
