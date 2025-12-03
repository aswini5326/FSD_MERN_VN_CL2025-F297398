import React from "react";
import data from ".././data.json";

const LocalDataProducts = () => {
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
      <h2 style={{ color: "blue", marginBottom: "20px" }}>
        Local JSON Products
      </h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              margin: "5px",
              padding: "10px",
              width: "150px",
            }}
          >
            <h4>{item.name}</h4>
            <p>Rs. {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalDataProducts;
