import React from "react";
import "../Styles/Components/Header.scss";
import { useNavigate } from "react-router-dom";

function Header({ user, setUser }) {
  let navigate = useNavigate();
  const storedToken = localStorage.getItem("token");
  return (
    <div className="Header">
      {storedToken ? (
        <>
          <p>Bienvenue {user.name}</p>
          <button
            onClick={() => {
              localStorage.clear();
              setUser({});
            }}
          >
            Se Deconnecter
          </button>
          {/* <p>{user.username} </p> */}
        </>
      ) : (
        <>
          <button onClick={() => navigate("/login")}>Se Connecter</button>
          <button onClick={() => navigate("/register")}>
            Créer son compte
          </button>
        </>
      )}
    </div>
  );
}
export default Header;
