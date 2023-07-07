import React, { useEffect } from "react";
import axios from "axios";
import "../Styles/Pages/Gagant.scss";
import { RequeteData } from "../Utils/ReqS";
import { useNavigate } from "react-router-dom";

function Gagant({ winners }) {
  let navigate = useNavigate();
  return (
    <div className="Gagant">
      <button onClick={() => navigate("/")}>retour</button>
      <h1>Liste des Gagants</h1>
      {winners && (
        <div className="box">
          {winners.map((box, i) => {
            const { players, patries } = box;
            return (
              <div key={i}>
                {players.map((winner) => {
                  const { _id, name, surname } = winner;
                  return <h2 key={_id}>{surname + " " + name}</h2>;
                })}
                <div className="patries">
                  {patries.map((patrie) => {
                    const { _id, name, image } = patrie;
                    return (
                      <div className="patrie" key={_id}>
                        <h3>{name}</h3>
                        <div>
                          <img src={image} alt={name} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Gagant;
