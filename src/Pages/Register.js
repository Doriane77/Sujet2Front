import React, { useState } from "react";
import "../Styles/Pages/Register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register({ setUser }) {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [adresse, setAdresse] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:8000/register", {
        name,
        surname,
        email,
        adresse,
        phone,
        password,
        confirmPassword,
      });

      console.log("response: ", response.data);

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
    <div className="Register">
      <h1>Créer mon Compte</h1>
      <form>
        <div>
          <label htmlFor="inputLoginName">Nom</label>
          <input
            type="text"
            id="inputLoginName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="inputLoginSurname">Prenom</label>
          <input
            type="text"
            id="inputLoginSurname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
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
          <label htmlFor="inputLoginAdresse">Adresse</label>
          <input
            type="text"
            id="inputLoginAdresse"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="inputLoginPhone">Portable</label>
          <input
            type="text"
            id="inputLoginPhone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
        <div>
          <label htmlFor="inputLoginConfirmPassword">
            Confirmer mot de passe
          </label>
          <input
            type="password"
            id="inputLoginConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Envoyer</button>
      </form>
      <p onClick={() => navigate("/login")}>Déja un compte ? Se Connecter !</p>
    </div>
  );
}
export default Register;
