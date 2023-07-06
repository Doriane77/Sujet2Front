import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Pages/HomePage.scss";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";

function HomePage({ user, setUser }) {
  let navigate = useNavigate();
  const storedToken = localStorage.getItem("token");

  return (
    <div className="HomePage">
      <Header user={user} setUser={setUser} />
      <nav>
        <button>
          <Link to="/concour">
            <span>CONCOURS</span>
          </Link>
        </button>
        <button>
          <Link to="/patisserie">
            <span>PÂTISSERIE</span>
          </Link>
        </button>
        <button>
          <Link to="/gagant">
            <span>GAGANTS</span>
          </Link>
        </button>
      </nav>
    </div>
  );
}
export default HomePage;
