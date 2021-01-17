import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../../Styles/Login/Company/CompanyLoginCreate.module.css';

import Input from '../../Helper/Input';
import Button from '../../Helper/Button';
import useForm from '../../../Hooks/useForm';
const CompanyLoginCreate = () => {
  const [loading, setLoading] = React.useState(false);

  const name = useForm();
  const email = useForm('email');
  const cnpj = useForm('cnpj');
  const area = useForm();
  const telefone = useForm();
  const funcionarios = useForm();
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
          <Input label="CNPJ" type="text" name="cnpj" {...cnpj} />
          <Input label="Industria" type="text" name="area" {...area} />
          <Input label="Telefone" type="text" name="telefone" {...telefone} />
          <Input
            label="Número de Funcionário"
            type="text"
            name="funcionarios"
            {...funcionarios}
          />
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

export default CompanyLoginCreate;
