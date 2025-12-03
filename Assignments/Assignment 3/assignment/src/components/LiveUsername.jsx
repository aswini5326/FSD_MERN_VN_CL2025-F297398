import React, { useState } from "react";

const LiveUsername = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const container = {
    width: "300px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "12px",
    boxShadow: "2px 2px 10px #333",
    textAlign: "center",
  };

  const inputStyle = {
    width: "90%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #aaa",
    outline: "none",
  };

  const textStyle = {
    fontSize: "18px",
    fontWeight: "500",
    color: "black",
  };
  return (
    <div
      style={{
        backgroundColor: "pink",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={container}>
        <h3>Live Username</h3>
        <input
          type="text"
          placeholder="Enter username"
          value={name}
          onChange={handleChange}
          style={inputStyle}
        />
        <p style={textStyle}>You typed: {name}</p>
      </div>
    </div>
  );
};

export default LiveUsername;
