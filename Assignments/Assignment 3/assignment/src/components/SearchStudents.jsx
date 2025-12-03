import React, { useState } from "react";

const SearchStudents = () => {
  const students = ["Akash", "Kumar", "Nisha", "Ramu", "Masha", "Arun", "Raju"];

  const [search, setSearch] = useState("");

  // Show suggestions only if starting letters match
  const filtered = students.filter((name) =>
    name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "magenta" }}>Search Students</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          width: "200px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtered.map((name, index) => (
          <li
            key={index}
            style={{
              background: "#fa7373ff",
              marginBottom: "8px",
              padding: "8px",
              borderRadius: "5px",
              width: "200px",
              textAlign: "center",
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchStudents;
