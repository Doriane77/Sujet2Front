import React, { useState } from "react";
import axios from "axios";
import "../Styles/Pages/Concour.scss";
import { useNavigate } from "react-router-dom";

function Concour() {
  let navigate = useNavigate();

  const [isLoding, setIsLoding] = useState(true);
  const storedToken = localStorage.getItem("token");
  const [play, setPlay] = useState([]);
  console.log("play: ", play);

  async function Game(e) {
    try {
      e.preventDefault();
      const response = await axios.get("http://localhost:8000/Play", {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      setPlay(response.data);
      setIsLoding(false);
      console.log("response: ", response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }
  return (
    <div className="Concour">
      <button onClick={() => navigate("/")}>retour</button>
      <div>
        <button onClick={Game}>JOUER</button>
        {!isLoding && (
          <div className="result">
            <p className="num">
              {play.numeros.map((num, i) => (
                <span>{num}</span>
              ))}
            </p>
            {play && <h1>{play.message}</h1>}
            <div className="box">
              {play.gain.map((elm, i) => {
                console.log("elm: ", elm);
                return (
                  <div key={elm._id}>
                    <h2>{elm.name}</h2>
                    <div className="img">
                      <img src={elm.image} alt={elm.name} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Concour;
