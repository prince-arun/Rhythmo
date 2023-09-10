import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [readyToRender, setReadyToRender] = useState(false);
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const response = await axios.post(
        "/api/users/get-user-data",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        setUserData(response.data.data);
      } else {
        alert(response.data.message);
      }
      setReadyToRender(true);
    } catch (error) {
      localStorage.removeItem("token");
      setReadyToRender(true);
      navigate("/login");
    }
  };

  useEffect(() => {
    if (userData === null) {
      getUserData();
    }
  }, []);
  return <div>{readyToRender ? children : <div>Loading....</div>}</div>;
};

export default ProtectedRoute;
