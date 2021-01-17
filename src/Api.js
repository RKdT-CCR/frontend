export const API_BASE_URL = 'https://hackathon-ccr.herokuapp.com';

export function USER(token) {
  return {
    url: `${API_BASE_URL}/api/index`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

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

export function PERSON_SINGUP(body) {
  return {
    url: `${API_BASE_URL}/api/person/register`,
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

export function COMPANY_SINGUP(body) {
  return {
    url: `${API_BASE_URL}/api/company/register`,
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
