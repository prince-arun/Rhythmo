import React, { useState } from "react";

function Register() {
  //user state
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  //register function
  const register = () => {
    console.log(user);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5 w-96 p-5 shadow border border-gray-300">
        <h1 className="text-3xl font-bold text-secondary">
          Welcome to Rhythmo
        </h1>
        <hr />
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
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
        <button className="primary" onClick={register}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
