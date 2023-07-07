import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Pages/HomePage.scss";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";

function HomePage({
  user,
  setUser,
  setWinners,
  setPatries,
  isLoding,
  setIsLoding,
}) {
  let navigate = useNavigate();
  const storedToken = localStorage.getItem("token");
  async function allWinner() {
    try {
      setIsLoding(false);
      const response = await axios.get("http://localhost:8000/Winners");

      setWinners(response.data);
      setIsLoding(true);
      console.log("Winners => ", response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async function allPatries() {
    try {
      setIsLoding(false);

      const response = await axios.get("http://localhost:8000/Patries");
      setPatries(response.data);
      setIsLoding(true);
      console.log("PATRIES => ", response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }
  return (
    <div className="HomePage">
      <Header user={user} setUser={setUser} />
      <nav>
        <button>
          <Link to={storedToken ? "/concour" : "login"}>
            <span>CONCOURS</span>
          </Link>
        </button>
        <button onClick={allPatries}>
          <Link to="/patisserie">
            <span>PÂTISSERIE</span>
          </Link>
        </button>
        <button onClick={allWinner}>
          <Link to="/gagnant">
            <span>GAGANTS</span>
          </Link>
        </button>
      </nav>
    </div>
  );
}
export default HomePage;
