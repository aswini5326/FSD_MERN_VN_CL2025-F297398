import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiUsers = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=20")
      .then((res) => {
        console.log(res.data.users);
        setUsers(res.data.users);
      })
      .catch(() => console.log("Error"));
  });

  const start = page * 5;
  const visible = users.slice(start, start + 5);

  return (
    <div
      style={{
        fontFamily: "Arial",
        backgroundColor: "#e9d4d4ff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    > 
      <h2 style={{ color: "red", textShadow: "2px 2px 10px #777" }}>
        Fetch 20 users from an API
      </h2>

      {visible.map((u) => (
        <p key={u.id} style={{ fontWeight: "bold" }}>
          {u.firstName} {u.lastName}
        </p>
      ))}

      <div style={{ marginTop: "15px" }}>
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          style={{
            padding: "8px 15px",
            marginRight: "10px",
            border: "none",
            borderRadius: "5px",
            background: page === 0 ? "#333" : "#4CAF50",
            color: "white",
          }}
        >
          Prev
        </button>

        <button
          disabled={start + 5 >= users.length}
          onClick={() => setPage(page + 1)}
          style={{
            padding: "8px 15px",
            border: "none",
            borderRadius: "5px",
            background: start + 5 >= users.length ? "#333" : "#4CAF50",
            color: "white",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ApiUsers;
