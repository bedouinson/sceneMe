import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { register } = useContext(AuthContext);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3002/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      register(data.user, data.token);
      console.log(data.token);
    } else {
      alert(data.message);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        backgroundImage: 'url("/home_background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-lightBackground p-6 rounded-lg shadow-lg w-full max-w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-primary">
          Welcome in!
        </h2>
        <form
          onSubmit={handleRegister}
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-40 bg-secondary text-white py-2 rounded-lg hover:bg-accent transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
