import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../Styles/Login/LoginForm.module.css';

import Input from '../Helper/Input';
import Button from '../Helper/Button';
import useForm from '../../Hooks/useForm';

import { UserLogin } from '../../Services/UserServices';

const LoginForm = () => {
  const email = useForm('email');
  const password = useForm();

  async function handleSubmit(e) {
    e.preventDefault();
    if (email.validate() && password.validate()) {
      const login = await UserLogin(email.value, password.value);
      if (login.success) {
        console.log('Logado com sucesso!');
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
          <Button>Entrar</Button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
