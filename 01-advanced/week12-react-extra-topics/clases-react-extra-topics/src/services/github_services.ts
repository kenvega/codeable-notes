const baseURL = "https://api.github.com/users/";

export const getProfile = (username: string) => {
  return fetch(baseURL + username).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.statusText);
    }
  });
};
