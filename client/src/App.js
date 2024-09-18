import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import { AuthProvider } from "./Context/AuthContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/lists"
          element={<Lists />}
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
