import { tokenKey, BASE_URI } from "../config";

export default async function apiFetch(
  endpoint: string,
  {
    method,
    headers,
    body,
  }: { method?: string; headers?: HeadersInit; body?: any } = {}
) {
  const token = sessionStorage.getItem(tokenKey);

  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
      ...headers,
    };
  }

  if (body) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(BASE_URI + endpoint, config);

  let data;

  if (!response.ok) {
    // por si el token ya no es valido, se elimina y se recarga la pagina
    // al no tener token nos redirigira al login despues del reload
    if (sessionStorage.getItem(tokenKey) && response.status === 401) {
      sessionStorage.removeItem(tokenKey);
      window.location.reload();
    }

    try {
      data = await response.json();
    } catch (error) {
      console.error("Error parsing JSON:", error);
      throw new Error(response.statusText);
    }

    // para tener un error mas visible en el front y que no salga object Object
    // se convierte el objeto de errores en un array de strings
    if (typeof data.errors === "object") {
      // Object into array of arrays
      const errors = Object.entries(data.errors);
      // Array of arrays into array of strings
      const messages = errors.map(([key, value]) => `${key} ${value}`);
      data.errors = messages;
    }

    throw new Error(data.errors);
  }

  try {
    data = await response.json();
  } catch (error) {
    console.error("Error parsing JSON:", error);
    data = response.statusText;
  }

  return data;
}
