import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(true);
  const handleclick = () => {
    setLogin(!login);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "blue" }}>
        {login ? "Welcome back!" : "Please log in"}{" "}
      </h2>
      <button
        onClick={handleclick}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "2px 2px 10px #333",
        }}
      >
        {login ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Login;
