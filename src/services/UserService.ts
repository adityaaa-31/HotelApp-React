import axios from "axios";

const apiUrl = import.meta.env.BASE_URL;
export async function getUsers() {
  const users = await axios.get(`${apiUrl}/sign-up`);

  if (!users.status) {
    throw Error("Failed");
  }

  return users.data;
}

export async function userSignUp(
  name: string,
  email: string,
  password: string
) {
  const userData = {
    name: name,
    email: email,
    password: password,
  };

  const res = await axios.post(`${apiUrl}/sign-up`, userData);

  if (!res.status) {
    return Error("Failed");
  }

  return res.data;
}
