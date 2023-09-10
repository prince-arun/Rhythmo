import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-5xl">Home</h1>
      <h1>{user?.name}</h1>
    </div>
  );
};

export default Home;
