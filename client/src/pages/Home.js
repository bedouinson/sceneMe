import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-text bg-cover bg-center"
      style={{
        backgroundImage: 'url("/home_background.jpg")',
      }}
    >
      <header className="text-center mb-8 p-6 rounded-lg max-w-md bg-gradient-to-r from-primary to-secondary bg-opacity-70 shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 text-white">
          Welcome to SceneMe!
        </h1>
        <p className="text-xl mb-4 text-white">
          SceneMe allows you to create and share your top 10 movies, TV shows,
          actors, and more.
        </p>
      </header>
      <div className="flex space-x-6">
        <button
          onClick={handleLogin}
          className="bg-secondary text-white py-3 px-6 rounded-lg shadow-md hover:bg-accent transition duration-300"
        >
          Login
        </button>
        <button
          onClick={handleRegister}
          className="bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:bg-darkBackground transition duration-300"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
