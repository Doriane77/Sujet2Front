import React from "react";
import "../Styles/Pages/Patisserie.scss";
import { useNavigate } from "react-router-dom";

function Patisserie({ patries, setPatries, isLoding }) {
  let navigate = useNavigate();
  console.log("patries: ", patries);
  return (
    <div className="Patisserie">
      <button onClick={() => navigate("/")}>retour</button>
      <div className="box">
        {patries &&
          patries.map((patrie, i) => {
            const { _id, name, number, image } = patrie;
            console.log("patrie: ", patrie);
            return (
              <div key={_id}>
                <h1>{name}</h1>
                <img src={image} alt={name} />
                <p>Nombre : {number}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Patisserie;
