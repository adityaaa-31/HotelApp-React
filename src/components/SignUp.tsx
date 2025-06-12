import { useState } from "react";
import { userSignUp } from "../services/UserService";
import * as yup from "yup";

export default function SignUp() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const schema = yup.object().shape({
    name: yup.string().trim().required("Name is required"),
    email: yup.string().trim().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  async function handleSubmit() {
      await schema.validate({name, email, password})
      userSignUp(name, email, password);
  }

  return (
    <>
      <div className="container">
        <h1> User Sign Up</h1>

        <div className="userInput">
          <span className="inputText">Enter Name</span>
          <input
            className="border rounded"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="userInput">
          <span className="inputText">Enter Email</span>
          <input
            className="border rounded"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="userInput">
          <span className="inputText">Enter Password</span>
          <input
            className="border rounded"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="button" onClick={handleSubmit} className="submitButton">
          Sign Up
        </button>
      </div>
    </>
  );
}
