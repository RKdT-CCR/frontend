export const API_BASE_URL = 'https://hackathon-ccr.herokuapp.com';

export function USER_LOGIN(body) {
  return {
    url: `${API_BASE_URL}/api/login`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
