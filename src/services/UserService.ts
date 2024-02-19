import axios from "axios";

export async function getUsers() {
  const users = await axios.get("http://localhost:8080/users");

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

  const res = await axios.post("http://localhost:8080/sign-up", userData);

  if (!res.status) {
    return Error("Failed");
  }

  return res.data;
}
