const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

async function fetchUsuariosApi() {
  const res = await fetch(USERS_API_URL);
  if (!res.ok) throw new Error('Error al consultar la API de usuarios');
  return res.json();
}
