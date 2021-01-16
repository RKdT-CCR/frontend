import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../Styles/Login/LoginForm.module.css';

import Input from '../Helper/Input';
import Button from '../Helper/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';

import { UserSingUp } from '../../Services/UserServices';

const LoginCreate = () => {
  const name = useForm();
  const email = useForm('email');
  const password = useForm();
  const repassword = useForm();

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      name.validate() &&
      email.validate() &&
      password.validate() &&
      password.value === repassword.value
    ) {
      const cadastro = await UserSingUp(
        name.value,
        email.value,
        password.value,
        password.value,
      );
      if (cadastro.success) {
        console.log('Cadastrado com sucesso!');
      }
    }
  }

  return (
    <section>
      <h1 className="title">Cadastrar</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...name} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Input
          label="Confirmar Senha"
          type="password"
          name="repassword"
          {...repassword}
        />
        <Button>Cadastrar</Button>
      </form>
      <Link to="/login">Entrar</Link>
    </section>
  );
};

export default LoginCreate;
