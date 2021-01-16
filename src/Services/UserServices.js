import { USER_LOGIN } from '../Api';

export async function UserLogin(email, password) {
  try {
    const { url, options } = USER_LOGIN({ email, password });

    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    return err;
  }
}
