import { USER_LOGIN, USER_SINGUP } from '../Api';

export async function UserLogin(email, password) {
  try {
    const { url, options } = USER_LOGIN({ email, password });

    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    return err;
  }
}

export async function UserSingUp(name, email, password, c_password) {
  try {
    const { url, options } = USER_SINGUP({ name, email, password, c_password });

    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    return err;
  }
}
