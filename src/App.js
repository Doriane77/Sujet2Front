import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Concour from "./Pages/Concour";
import Patisserie from "./Pages/Patisserie";
import Gagant from "./Pages/Gagnant";

function App() {
  const [user, setUser] = useState({});
  const [winners, setWinners] = useState([]);
  const [patries, setPatries] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const storedToken = localStorage.getItem("token");

  // console.log("user: ", user);
  // console.log("storedToken: ", storedToken);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              user={user}
              setUser={setUser}
              setWinners={setWinners}
              setPatries={setPatries}
              isLoding={isLoding}
              setIsLoding={setIsLoding}
            />
          }
        />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/register"
          element={<Register user={user} setUser={setUser} />}
        />
        <Route
          path="/concour"
          element={
            <Concour user={user} setUser={setUser} isLoding={isLoding} />
          }
        />
        <Route
          path="/patisserie"
          element={
            <Patisserie
              user={user}
              setUser={setUser}
              patries={patries}
              setPatries={setPatries}
              isLoding={isLoding}
            />
          }
        />
        <Route
          path="/gagnant"
          element={
            <Gagant
              user={user}
              setUser={setUser}
              winners={winners}
              setWinners={setWinners}
              isLoding={isLoding}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
