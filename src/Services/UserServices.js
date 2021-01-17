import React from 'react';

import { COMPANY_SINGUP, PERSON_SINGUP, USER, USER_LOGIN } from '../Api';

export const Context = React.createContext();

export const UserStorage = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [trilhas, setTrilhas] = React.useState(null);
  const [coursesCompletes, setCoursesCompletes] = React.useState(null);
  const [coursesStatus, setCoursesStatus] = React.useState(null);

  async function GetUser() {
    try {
      const token = window.localStorage.getItem('token');
      const { url, options } = USER(token);

      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
      return json;
    } catch (err) {
      return err;
    }
  }

  function setData(data) {
    setUser(data);
  }

  function DefTrilhas(data) {
    setTrilhas(data);
  }

  function DefCompletes(data) {
    setCoursesCompletes(data);
  }

  function DefStatus(data) {
    setCoursesStatus(data);
  }

  return (
    <Context.Provider
      value={{
        user,
        trilhas,
        coursesCompletes,
        coursesStatus,
        GetUser,
        setData,
        DefTrilhas,
        DefCompletes,
        DefStatus,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export async function UserLogin(email, password) {
  try {
    const remember_me = true;
    const { url, options } = USER_LOGIN({ email, password, remember_me });

    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
}

export async function PersonSingUp(
  name,
  email,
  cpf,
  birth,
  occupation_area,
  educational_level,
  number,
  password,
  c_password,
) {
  try {
    const { url, options } = PERSON_SINGUP({
      name,
      email,
      cpf,
      birth,
      occupation_area,
      educational_level,
      number,
      password,
      c_password,
    });

    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
}

export async function CompanySingUp(
  name,
  email,
  cnpj,
  industry,
  employees_number,
  password,
  c_password,
) {
  try {
    const { url, options } = COMPANY_SINGUP({
      name,
      email,
      cnpj,
      industry,
      employees_number,
      password,
      c_password,
    });
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
}
