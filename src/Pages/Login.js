import React, { useState } from "react";
import "../Styles/Pages/Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RequeteData } from "../Utils/ReqS";
function Login({ user, setUser }) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function onSubmit(e) {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      // const response = await RequeteData("post", "login", { email, password });
      const userData = response.data.user;
      setUser(userData);
      const token = response.data.token;
      localStorage.setItem("userData", userData);
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="Login">
      <h1>Se Connecter</h1>
      <form action="">
        <div>
          <label htmlFor="inputLoginEmail">Email</label>
          <input
            type="email"
            id="inputLoginEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="inputLoginPassword">Mot de passe</label>
          <input
            type="password"
            id="inputLoginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={onSubmit}>Envoyer</button>
      </form>
      <p onClick={() => navigate("/register")}>Pas de compte ? S'enregister</p>
    </div>
  );
}
export default Login;
