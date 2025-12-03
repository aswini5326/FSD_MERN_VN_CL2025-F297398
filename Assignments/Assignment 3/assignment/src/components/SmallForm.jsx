import React, { useState } from "react";

const SmallForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult({ name, email });
  };
  return (
    <div
      style={{
        backgroundColor:"beige",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "300px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          background: "#f9f9f9",
          fontFamily: "Arial",
          boxShadow:"2px 2px 8px #999"
        }}
      >
        <h3>Form</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "90%",
              padding: "8px",
              margin: "8px 0",
              borderRadius: "5px",
              border: "1px solid #aaa",
            }}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "90%",
              padding: "8px",
              margin: "8px 0",
              borderRadius: "5px",
              border: "1px solid #aaa",
            }}
          />
          <br />
          <button
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "5px",
              background: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>

        {result && (
          <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
            <strong>Name:</strong> {result.name} <br />
            <strong>Email:</strong> {result.email}
          </p>
        )}
      </div>
    </div>
  );
};

export default SmallForm;
