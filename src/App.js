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
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const storedToken = localStorage.getItem("token");
  console.log("user: ", user);
  console.log("storedToken: ", storedToken);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} token={token} />}
        />
        <Route
          path="/register"
          element={<Register user={user} setUser={setUser} token={token} />}
        />
        <Route
          path="/concour"
          element={<Concour user={user} setUser={setUser} token={token} />}
        />
        <Route
          path="/patisserie"
          element={<Patisserie user={user} setUser={setUser} token={token} />}
        />
        <Route
          path="/gagant"
          element={<Gagant user={user} setUser={setUser} token={token} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
