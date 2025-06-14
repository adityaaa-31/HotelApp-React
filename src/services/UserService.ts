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

  const response = await axios.post(`${apiUrl}/api/auth/sign-up`, userData);

  if (!response.status) {
    return Error("Failed");
  }

  return response.data;
}
