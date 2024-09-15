import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

const Home = () => {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const fetchTrendingBackground = async () => {
      try {
        console.log(API_KEY);
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        const data = await response.json();
        const randomItem =
          data.results[Math.floor(Math.random() * data.results.length)];
        const backgroundPath =
          randomItem?.backdrop_path || randomItem?.poster_path;
        setBackgroundImage(
          `https://image.tmdb.org/t/p/original${backgroundPath}`
        );
      } catch (error) {
        console.error("Error fetching background image:", error);
      }
    };

    fetchTrendingBackground();
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div
      className="flex flex-col items-start justify-center min-h-screen text-text bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Responsive Navbar */}
      <nav className="absolute top-0 left-0 w-full p-4 bg-opacity-80 text-white ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">SceneMe</div>
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => navigate("/")}
                className="hover:underline"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/movies")}
                className="hover:underline"
              >
                Movies
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/tv-shows")}
                className="hover:underline"
              >
                TV Shows
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row justify-between items-center w-full p-24">
        <header className="text-center mb-10 p-8 rounded-lg max-w-2xl g-opacity-80 mt-20">
          <h1 className="text-6xl font-extrabold mb-6 text-white">
            Discover, Share, and Celebrate Your Favorites with SceneMe!
          </h1>
          <p className="text-2xl mb-4 text-white">
            Whether you're passionate about movies, TV shows, or actors, SceneMe
            helps you organize and share your top 10 favorites with ease.
          </p>
        </header>

        <div className="flex flex-col items-center space-y-6 mt-6">
          <button
            onClick={handleLogin}
            className="bg-secondary text-white py-4 px-8 rounded-full shadow-lg hover:bg-accent transition duration-300 ease-in-out transform hover:scale-105"
          >
            Log In to Your SceneMe Account
          </button>
          <p className="text-white text-lg">
            Don't have an account yet? Register now!
          </p>

          <button
            onClick={handleRegister}
            className="bg-primary text-white py-4 px-8 rounded-full shadow-lg hover:bg-darkBackground transition duration-300 ease-in-out transform hover:scale-105"
          >
            Create Your Free Account Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
