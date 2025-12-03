import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiProductsLoad = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <h2 style={{ color: "blue", textAlign: "center", marginTop: "20px" }}>
        Loading...
      </h2>
    );

  if (error)
    return (
      <h2 style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
        Error loading data
      </h2>
    );
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "green" }}>Products Loaded Successfully</h2>
      {products.map((p) => (
        <p key={p.id}>
          {p.title} - Rs.{p.price} - {p.brand}
        </p>
      ))}
    </div>
  );
};

export default ApiProductsLoad;
