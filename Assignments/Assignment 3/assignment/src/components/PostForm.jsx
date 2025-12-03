import React, { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = (e) => {
    e.preventDefault();

    axios
      .post("https://dummyjson.com/posts/add", {
        title,
        body,
      })
      .then(() => setMessage("Post Added!"))
      .catch(() => setMessage("Error adding post"));
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f4",
      }}
    >
      <div
        style={{
          padding: "25px",
          width: "350px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>Post Form</h3>

        <form onSubmit={handlePost}>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <textarea
            placeholder="Body"
            onChange={(e) => setBody(e.target.value)}
            rows="4"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              resize: "none",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              background: "#007bff",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>

        <h4 style={{ marginTop: "15px", color: "green" }}>{message}</h4>
      </div>
    </div>
  );
};

export default PostForm;
