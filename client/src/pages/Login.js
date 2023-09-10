import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  //user state
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //login function
  const login = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      if (response.data.success) {
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5 w-96 p-5 shadow border border-gray-300">
        <h1 className="text-3xl font-bold text-secondary">Welcome Back</h1>
        <hr />

        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="primary" onClick={login}>
          login
        </button>
        <Link to="/register" className="text-secondary underline">
          Not yet Registered ? Click Here To Signup
        </Link>
      </div>
    </div>
  );
}

export default Login;
