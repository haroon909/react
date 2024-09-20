import React, { useEffect, useState } from "react";

const Login = () => {
  const [userLogin, setUserLogin] = useState([]);

  useEffect(() => {
    const fetchUserLogin = async () => {
      try {
        const response = await fetch(
          "https://66d806e137b1cadd8053106b.mockapi.io/Users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setUserLogin(data);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    fetchUserLogin();
  }, []);

 
  return (
    <div className="container mt-5">
      
    </div>
  );
};

export default Login;
