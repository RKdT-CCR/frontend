import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../Styles/Login/LoginCreate.module.css';

import Input from '../Helper/Input';
import Button from '../Helper/Button';
import useForm from '../../Hooks/useForm';

import { UserSingUp } from '../../Services/UserServices';

const LoginCreate = () => {
  const [loading, setLoading] = React.useState(false);

  const name = useForm();
  const email = useForm('email');
  const cpf = useForm('cpf');
  const birthday = useForm();
  const area = useForm();
  const telefone = useForm();
  const password = useForm();
  const repassword = useForm();

  async function handleSubmit(e) {
    e.preventDefault();
    // if (
    //   name.validate() &&
    //   email.validate() &&
    //   password.validate() &&
    //   password.value === repassword.value
    // ) {
    //   setLoading(true);
    //   const cadastro = await UserSingUp(
    //     name.value,
    //     email.value,
    //     password.value,
    //     password.value,
    //   );
    //   setLoading(false);
    //   if (cadastro.success) {
    //     console.log('Cadastrado com sucesso!');
    //   }
    // }
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
            name="birthday"
            {...birthday}
          />
          <Input label="Área de Atuação" type="text" name="area" {...area} />
          <Input label="Telefone" type="text" name="telefone" {...telefone} />
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
        </form>
        <Link className={styles.japossui} to="/login">
          Já possui uma conta?
        </Link>
      </div>
    </section>
  );
};

export default LoginCreate;
