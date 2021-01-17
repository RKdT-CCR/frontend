import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from '../../../Styles/Login/Company/CompanyLoginCreate.module.css';

import Input from '../../Helper/Input';
import Button from '../../Helper/Button';
import Error from '../../Helper/Error';
import useForm from '../../../Hooks/useForm';

import { CompanySingUp } from '../../../Services/UserServices';

const CompanyLoginCreate = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

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
    if (
      name.validate() &&
      email.validate() &&
      cnpj.validate() &&
      area.validate() &&
      telefone.validate() &&
      funcionarios.validate() &&
      password.validate() &&
      password.value === repassword.value
    ) {
      setLoading(true);
      setError(null);
      const cadastro = await CompanySingUp(
        name.value,
        email.value,
        cnpj.value,
        area.value,
        funcionarios.value,
        password.value,
        password.value,
      );
      setLoading(false);
      if (cadastro.success) {
        window.localStorage.setItem('token', cadastro.success.token);
        navigate('/auth');
      } else {
        setError('Erro ao cadastrar');
      }
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className="title">Venha fazer parte</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input label="Nome da Empresa" type="text" name="name" {...name} />
          <Input label="E-mail" type="email" name="email" {...email} />
          <Input label="CNPJ" type="text" name="cnpj" {...cnpj} />
          <Input label="Área de Atuação" type="text" name="area" {...area} />
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
          {error && <Error error={error} />}
        </form>
        <Link className={styles.japossui} to="/login">
          Já possui uma conta?
        </Link>
      </div>
    </section>
  );
};

export default CompanyLoginCreate;
