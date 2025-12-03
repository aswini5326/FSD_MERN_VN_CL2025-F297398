import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h2 style={{ textAlign: "center", color: "blue" }}>All Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              backgroundColor: "lightgreen",
            }}
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3>{p.title}</h3>
            <p>
              <strong>Brand:</strong> {p.brand}
            </p>
            <p>
              <strong>Price:</strong> Rs.{p.price}
            </p>
            <p>
              <strong>Category:</strong> {p.category}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {p.rating}
            </p>
            <p>
              <strong>Stock:</strong> {p.stock}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiProducts;
