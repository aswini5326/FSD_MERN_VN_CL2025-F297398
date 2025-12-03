import React from "react";

const ProductTable = () => {
  const products = [
    { id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Phone", price: 15000 },
    { id: 3, name: "Headset", price: 2000 },
  ];

  const tableStyle = {
    borderCollapse: "collapse",
    width: "400px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    borderRadius: "10px",
    overflow: "hidden",
  };

  const headerStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    fontSize: "18px",
  };

  const cellStyle = {
    padding: "10px",
    fontSize: "16px",
    borderBottom: "1px solid #ddd",
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
      <h3 style={{ color: "red", fontSize: "20px" }}>Product Table</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>ID</th>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td style={cellStyle}>{p.id}</td>
              <td style={cellStyle}>{p.name}</td>
              <td style={cellStyle}>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
