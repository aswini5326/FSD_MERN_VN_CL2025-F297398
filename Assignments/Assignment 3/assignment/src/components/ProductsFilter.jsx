import React, { useState } from "react";

const ProductsFilter = () => {
  const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothes" },
    { name: "Mobile", category: "Electronics" },
    { name: "Jeans", category: "Clothes" },
    { name: "Pen", category: "Assesories" },
  ];

  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  const buttonStyle = {
    marginRight: "10px",
    padding: "6px 12px",
    cursor: "pointer",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "10px",
  };
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
      <h2 style={{ color: "red" }}>Product Filter</h2>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setFilter("All")} style={buttonStyle}>
          All
        </button>
        <button onClick={() => setFilter("Electronics")} style={buttonStyle}>
          Electronics
        </button>
        <button onClick={() => setFilter("Clothes")} style={buttonStyle}>
          Clothes
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtered.map((p, index) => (
          <li
            key={index}
            style={{
              background: "#eac2c2ff",
              padding: "8px",
              marginBottom: "8px",
              borderRadius: "5px",
              width: "300px",
              textAlign: "center",
            }}
          >
            {p.name} ({p.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsFilter;
