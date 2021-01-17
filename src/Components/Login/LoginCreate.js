import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from '../../Styles/Login/LoginCreate.module.css';

import Input from '../Helper/Input';
import Button from '../Helper/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';

import { PersonSingUp } from '../../Services/UserServices';

const LoginCreate = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  const name = useForm();
  const email = useForm('email');
  const cpf = useForm('cpf');
  const birthday = useForm();
  const area = useForm();
  const educacao = useForm();
  const telefone = useForm();
  const password = useForm();
  const repassword = useForm();

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      name.validate() &&
      email.validate() &&
      cpf.validate() &&
      birthday.validate() &&
      area.validate() &&
      educacao.validate() &&
      telefone.validate() &&
      password.validate() &&
      password.value === repassword.value
    ) {
      setLoading(true);
      setError(null);
      const cadastro = await PersonSingUp(
        name.value,
        email.value,
        cpf.value,
        birthday.value,
        area.value,
        educacao.value,
        telefone.value,
        password.value,
        password.value,
      );
      setLoading(false);
      if (cadastro.success) {
        window.localStorage.setItem('token', cadastro.success.token);
        navigate('/auth');
      } else {
        setError('Erro no cadastro');
      }
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className="title">Venha fazer parte</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input label="Nome" type="text" name="name" {...name} />
          <Input label="E-mail" type="email" name="email" {...email} />
          <Input label="CPF" max="14" type="text" name="cpf" {...cpf} />
          <Input
            label="Data de Nascimento"
            type="date"
            name="birth"
            {...birthday}
          />
          <Input
            label="Nível de Educação"
            type="text"
            name="educational_level"
            {...educacao}
          />
          <Input
            label="Área de Atuação"
            type="text"
            name="occupation_area"
            {...area}
          />
          <Input label="Telefone" type="text" name="number" {...telefone} />
          <Input label="Senha" type="password" name="password" {...password} />
          <Input
            label="Confirmar Senha"
            type="password"
            name="repassword"
            {...repassword}
          />
          {loading ? (
            <Button disabled>Cadastrando...</Button>
          ) : (
            <Button>Cadastrar</Button>
          )}

          {error && <Error error={error} />}
        </form>
        <Link className={styles.japossui} to="/login">
          Já possui uma conta?
        </Link>
      </div>
    </section>
  );
};

export default LoginCreate;
