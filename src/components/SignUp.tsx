import { useEffect, useState } from "react";
import { userSignUp } from "../services/UserService";

export default function SignUp() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  // const [signupStatus, setSignUpStatus] = useState<boolean>(false);

//yup
  function handleSubmit() {
    if (name.trim() !== "" && email.trim() !== "") {
      userSignUp(name, email, password);
    } else {
      alert("Invalid");
    }
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
